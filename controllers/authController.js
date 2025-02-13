import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../config/prismaClient.js";

const generateToken = (user) => {
  return jwt.sign(
    { userId: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};

const registerUser = async (name, email, password) => {
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) throw new Error("User already exists");
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: { name, email, password: hashedPassword },
  });

  return { user, token: generateToken(user) };
};

const loginUser = async (email, password) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error("Invalid credentials");

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) throw new Error("Invalid credentials");

  return { user, token: generateToken(user) };
};

// Set cookie options
const cookieOptions = {
  httpOnly: true, // Prevent access from JavaScript
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
};

// Register route
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const { user, token } = await registerUser(name, email, password);

    res.status(200).json({
      message: "Login successful",
      user,
      token,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Login route
// Login route
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await loginUser(email, password);

    res.status(200).json({
      message: "Login successful",
      user,
      token,
    });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
