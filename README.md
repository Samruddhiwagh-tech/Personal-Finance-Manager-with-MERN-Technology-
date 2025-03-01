🏦 Personal Finance Manager - Full Stack 💰

A modern and user-friendly personal finance management web app built using React, Bootstrap, Node.js, Express.js, and MongoDB.
📌 Overview

This project aims to provide an easy-to-use platform for tracking daily expenses and managing personal finances efficiently.

✅ Frontend: Developed using React.js and Bootstrap.
✅ Backend: Built using Node.js, Express.js, and MongoDB.
🚀 Features
Frontend:

✔️ Login & Registration Page – User authentication UI
✔️ Profile Avatar Selection – Choose a profile picture
✔️ Expense Management Page – Add, view, and delete transactions
✔️ Responsive UI – Clean and interactive design
Backend:

✔️ User Authentication – Secure user registration with password encryption using bcrypt.js
✔️ Expense Management API – Store and retrieve expenses using MongoDB
✔️ RESTful API with Express.js – Efficient backend logic for handling requests
✔️ CORS Handling – Ensuring smooth frontend-backend communication
📌 Tech Stack
Frontend:

🖥️ React.js, Bootstrap, HTML, CSS
Backend:

🛠️ Node.js, Express.js, MongoDB
Tools Used:

🔹 MongoDB Compass – GUI for database management
🔹 Postman – API testing tool
🔹 MongoDB Shell (mongosh) – Command-line database interaction
🚀 Getting Started
Frontend Setup

1️⃣ Check Node.js Version
Ensure Node.js is installed:

npm -v

2️⃣ Create a New React App

npx create-react-app personal-finance-manager

3️⃣ Navigate to the Project Directory

cd personal-finance-manager

4️⃣ Install Dependencies

npm install react-bootstrap bootstrap

5️⃣ Start the Development Server

npm start

6️⃣ Open in Browser
Your app will be available at: http://localhost:3000/
Backend Setup

1️⃣ Navigate to the Backend Directory

cd backend

2️⃣ Initialize Node.js Project

npm init -y

3️⃣ Install Dependencies

npm install express mongoose cors bcryptjs body-parser

4️⃣ Start MongoDB
Ensure MongoDB is running. Use one of the following methods:

(Option 1) Start as a service (Windows):

net start MongoDB

(Run PowerShell as Administrator)

(Option 2) Start manually:

mongod

5️⃣ Run the Server

node server.js

6️⃣ Test API using Postman

    Open Postman and test http://localhost:5001/api/register with user details.
    Test http://localhost:5001/api/expenses to add expenses.

📌 Backend API Endpoints
User Registration (POST)

URL: /api/register
Body:

{
  "email": "user@example.com",
  "phone": "1234567890",
  "name": "John Doe",
  "password": "securepassword"
}

Add Expense (POST)

URL: /api/expenses
Body:

{
  "date": "2025-02-25",
  "title": "Groceries",
  "category": "Food",
  "amount": 500
}

🎯 Future Enhancements

🔹 Add JWT Authentication – Secure user sessions
🔹 Enable User Profiles – Store and display personalized finance data
