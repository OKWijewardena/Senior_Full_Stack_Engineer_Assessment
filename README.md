# Senior_Full_Stack_Engineer_Assessment
In this assessment I'm going to build a small to-do task web application

# 📌 Project Structure

/todo-task-app

  ├── /backend    → Express.js API (Node.js + PostgreSQL)
  
  ├── /frontend   → React (Material UI)
  
  ├── docker-compose.yml → Runs both frontend & backend in containers

# 🚀 Getting Started
  
Follow these steps to build and run the project.

## 1️⃣ Prerequisites

Docker (Ensure it's installed and running)

Node.js & npm (Only needed for local development)

PostgreSQL Database (Use Supabase or run a local instance

# 🖥 Backend Setup

📂 Navigate to the Backend Folder

cd backend

## 🛠 Setup Environment Variables

Create a .env file in the backend directory

DATABASE_URL=postgresql://postgres:Iamthebest@1@db.ppwbokarpaomxramrpyb.supabase.co:5432/postgres

PORT=5000

## ▶ Run the Backend Locally

npm install

npm start

## 🐳 Run the Backend with Docker

docker-compose up --build

# 🎨 Frontend Setup

## 📂 Navigate to the Frontend Folder

cd frontend

## ▶ Run the Frontend Locally

npm install

npm start

## 🐳 Run the Frontend with Docker

docker build -t my-react-frontend .

docker run -d -p 3000:80 --name frontend-container my-react-frontend

# 🛠 Testing

## Backend Tests

Run Jest tests:

npm test

## Check Running Containers

docker ps
