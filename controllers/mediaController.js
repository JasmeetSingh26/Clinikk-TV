import prisma from "../config/prismaClient.js";

export const getMedia = async (req, res) => {
  try {
    const media = await prisma.media.findMany();
    res.json(media);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const createMedia = async (req, res) => {
  try {
    const newMedia = await prisma.media.create({
      data: req.body,
    });
    res.status(201).json(newMedia);
  } catch (error) {
    res.status(400).json({ error: "Invalid input" });
  }
};
