# ☕ Coffee Dashboard (Full Stack)

A full-stack web application for managing a coffee shop menu and customer orders, built with a modern frontend and a REST API backend.

---

##  Features

* Dynamic menu fetched from backend API
* Add to cart functionality
* Place orders with customer details
* Real-time order handling (in-memory storage)
* Responsive UI for smooth user experience

---

## 🛠️ Tech Stack

**Frontend**

* React / Next.js
* TypeScript
* Tailwind CSS

**Backend**

* Node.js
* Express.js

**Other**

* REST APIs
* Fetch API for client-server communication

---

## 🔗 Project Architecture

Frontend (UI) communicates with backend APIs:

* `GET /api/menu` → Fetch menu items
* `POST /api/orders` → Place new order
* `GET /api/orders` → View orders

---

## ⚙️ How to Run Locally

### 1. Clone the repository

```bash
git clone [https://github.com/YOUR-USERNAME/coffee-dashboard-fullstack.git
cd coffee-dashboard-fullstack](https://github.com/Divs-iy/Coffee-Cuppa
```

---

### 2. Start Backend

```bash
node Server.js
```

Runs on:

```
http://localhost:3001
```

---

### 3. Start Frontend

```bash
npm install
npm run dev
```

Runs on:

```
http://localhost:3000
```

---

## 📌 Key Highlights

* Implemented full frontend-backend integration
* Handled CORS and API communication
* Built RESTful APIs for real-world data flow
* Managed state and user interactions effectively

---

##  Notes

* Orders are stored in memory (no database yet)
* Data resets when server restarts

---

## Future Improvements

* Add database (MongoDB / MySQL)
* User authentication
* Admin dashboard for order management
* Deployment (Vercel + Render)

---

##  Author

Divya Singh
GitHub: https://github.com/Divs-iy
