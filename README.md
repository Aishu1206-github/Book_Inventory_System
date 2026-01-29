# 📚 Book Inventory Management System

A Book Inventory Management System built using **React.js** that allows users to manage books with full CRUD functionality.  
The application fetches data from a REST API and displays it in a clean, responsive UI.

---

## 🚀 Features

- View all books in a table format
- Add new books to inventory
- Edit existing book details
- Delete books from inventory
- View detailed information of a selected book
- Responsive design for all screen sizes
- API-based data handling

---

## 🛠️ Tech Stack

**Frontend**
- React.js
- React Hooks (useState, useEffect)
- Axios
- React Router
- CSS

**Backend**
- JSON Server
- REST API
- Deployed on Render

---

## 📂 Project Structure
book-inventory/
│
├── backend/
│ ├── db.json
│ └── package.json
│
├── src/
│ ├── components/
│ ├── services/
│ ├── styles/
│ ├── App.js
│ └── index.js
│
└── README.md

---

## ⚙️ How to Run Locally

### 1️⃣ Clone Repository
```bash
git clone https://github.com/Aishu1206-github/Book_Inventory_System.git
cd Book_Inventory_System

### 2️⃣ Start Backend
cd backend
npm install
npx json-server --watch db.json --port 10000

### 3️⃣ Start Frontend
cd ..
npm install
npm start

Frontend runs at:
http://localhost:3000

Backend runs at:
http://localhost:10000/books

---

## 🌍 Deployment
Backend (Render)
Hosted using JSON Server

[*Live API URL*]:
(https://book-inventory-backend-805x.onrender.com/books)

Frontend (Vercel)
Deployed React application

Live Website:
https://book-system-nu.vercel.app/

---

📌 React Concepts Used

Functional Components
Props
useState & useEffect
Conditional Rendering
API Integration
React Router

---

## 👩‍💻 Author

Aishwarya Jadhav
Frontend Developer | React.js
