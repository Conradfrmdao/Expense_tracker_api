
# 💰 Expense Tracker API

A secure RESTful API that allows users to track their daily expenses, categorized by type (e.g., Food, Transport, Bills). Built with Node.js, Express, MongoDB, JWT, and bcrypt for authentication.

## 📦 Features

- User registration and login (with hashed passwords)
- JWT-based authentication
- Create, read, update, and delete your expenses
- Secure route access (each user sees only their data)

---

## 🛠️ Tech Stack

- **Node.js** – Backend runtime
- **Express.js** – Web framework
- **MongoDB Atlas** – NoSQL database
- **Mongoose** – ODM for MongoDB
- **JWT** – JSON Web Tokens for authentication
- **Bcrypt** – For hashing passwords
- **Dotenv** – To manage environment variables

---

## 🧪 API Endpoints

### 🔐 Auth

| Method | Endpoint         | Description        |
|--------|------------------|--------------------|
| POST   | `/api/auth/register` | Register a new user |
| POST   | `/api/auth/login`    | Log in and receive a token |

### 💸 Expenses

| Method | Endpoint               | Description              |
|--------|------------------------|--------------------------|
| GET    | `/api/expenses`        | Get all your expenses    |
| POST   | `/api/expenses`        | Add a new expense        |
| PUT    | `/api/expenses/:id`    | Update an expense        |
| DELETE | `/api/expenses/:id`    | Delete an expense        |


> ⚠️ All `/expenses` routes require a valid JWT token in the Authorization header:  
`Authorization: Bearer <token>`

---

## 🧾 Expense Model (MongoDB)

```js
{
  title: "Fuel for boda",
  amount: 15000,
  category: "Transport",
  date: "2025-06-08",
  userId: "ObjectId('...')"
}
