# 📌 Todo List API

A **RESTful API** for managing a personal todo list with **JWT authentication**, **MongoDB**, and **Swagger documentation**.  
This project supports **user authentication**, **CRUD operations on todos**, and advanced features like **pagination, filtering, and sorting**.  

---

## 🚀 Features
- 🔐 **User Authentication** (Register & Login with JWT)  
- ✅ **CRUD for Todos** (Create, Read, Update, Delete)  
- 📄 **Swagger API Documentation** (`/api-docs`)  
- 📊 **Pagination, Filtering, and Sorting** for Todos  
- 🛡 **Protected Routes** using JWT  
- 🗄 **MongoDB Integration** with Mongoose  

---

## 🛠 Tech Stack
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB, Mongoose  
- **Auth:** JWT, bcryptjs  
- **Validation:** express-validator  
- **Documentation:** Swagger (swagger-jsdoc, swagger-ui-express)  
- **Dev Tools:** Nodemon, dotenv  

---

## 📂 Project Structure
```
todo-list-api/
│── config/
│   └── db.js              # Database connection
│── controllers/
│   ├── authController.js  # Auth logic
│   └── todoController.js  # Todo CRUD logic
│── docs/
│   └── swagger.js         # Swagger setup
│── middleware/
│   └── auth.js            # JWT middleware
│── models/
│   ├── User.js            # User model
│   └── Todo.js            # Todo model
│── routes/
│   ├── authRoutes.js      # Auth routes
│   └── todoRoutes.js      # Todo routes
│── server.js              # App entry point
│── package.json
│── .env.example
│── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/todo-list-api.git
cd todo-list-api
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root folder and add:  
```
MONGO_URI=mongodb://localhost:27017/todo_db
JWT_SECRET=your_jwt_secret
PORT=5000
```

### 4️⃣ Run the app
```bash
# Development mode
npm run dev

# Production mode
npm start
```

---

## 📖 API Documentation (Swagger)
Once the server is running, open:  
👉 [http://localhost:5000/api-docs](http://localhost:5000/api-docs)  

---

## 🔑 API Endpoints

### 🔐 Authentication
- `POST /api/auth/register` → Register a new user  
- `POST /api/auth/login` → Login & get JWT  

### 📝 Todos (Protected Routes)
- `GET /api/todos` → Get all todos (with pagination, filtering, sorting)  
- `POST /api/todos` → Create a new todo  
- `PUT /api/todos/:id` → Update a todo  
- `DELETE /api/todos/:id` → Delete a todo  

---

## 🧪 Example Request

### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```

### Login User
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "123456"
}
```

### Create Todo (JWT required)
```http
POST /api/todos
Authorization: Bearer <your_token>
Content-Type: application/json

{
  "title": "Buy groceries",
  "description": "Milk, eggs, bread"
}
```

---

## 📌 Author
👤 **Dariush Rahmani**  
📧 [Email](mailto: dariushrahmanidev@gmail.com) | 💻 [GitHub](https://github.com/Dariushrahmani1385)
