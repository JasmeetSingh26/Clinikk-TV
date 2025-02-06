# Clinikk TV Project Documentation

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Setup Instructions](#setup-instructions)
5. [Backend Service](#backend-service)
6. [API Endpoints](#api-endpoints)
7. [Design Approach](#design-approach)
8. [Architecture Diagram](#architecture-diagram)

---

## 1. Project Overview

Clinikk TV is a platform that provides subscribers with access to rich, health-related media content, including both video and audio. The platform ensures secure access, content management, and efficient media delivery.

## 2. Features

- **Secure Authentication** – User login and registration with JWT.
- **Video Upload & Streaming** – Users can upload and stream videos seamlessly.
- **Backend API for Content Management** – CRUD operations for media content.
- **Optimized Database Management** – Efficient storage and retrieval using PostgreSQL.

## 3. Tech Stack

### Backend:

- **Node.js with Express.js** – REST API development.
- **PostgreSQL with Prisma ORM** – Database management.
- **JWT (JSON Web Token)** – Secure authentication.

---

## 4. Setup Instructions

### Prerequisites:

- **Node.js** (v16+)
- **Neon Database** (PostgreSQL)

### Steps to Setup Locally:

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/clinikk-tv.git
   cd clinikk-tv/backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add the following environment variables:
   ```sh
   DATABASE_URL=your_postgres_db_url
   JWT_SECRET=your_secret_key
   ```
4. Run database migrations:
   ```sh
   npx prisma migrate dev --name init
   ```
5. Start the server:
   ```sh
   npm run dev
   ```

---

## 5. Backend Service

### Running the Backend

- Ensure all dependencies are installed.
- The API runs on `http://localhost:3000/`.

### Database Configuration

- Using **Prisma ORM** for database interaction.
- PostgreSQL is used as the primary database.

---

## 6. API Endpoints

### Authentication

- `POST /api/auth/register` – Register a new user.
- `POST /api/auth/login` – Authenticate user and return JWT.

### Video Management

- `POST /api/media` – Upload a new video.
- `GET /api/media` – Fetch all available videos.

---

## 7. Design Approach

### Key Design Considerations:

- **Scalability** – The system is designed to support high traffic.
- **Security** – JWT-based authentication and role-based access control.
- **Performance** – Optimized queries and caching strategies.
- **Reliability** – Database transactions are atomic and consistent.

---

## 8. Architecture Diagram

Below is the high-level architecture diagram for Clinikk TV:

![image](https://github.com/user-attachments/assets/20d8fd5c-cfa7-4385-b89c-78f2a169180a)


### Author: Jasmeet Singh

For support, contact: **singhjasmeet200526@gmail.com**
