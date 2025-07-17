# 🛒 EcommerceWebsite

A MERN stack ecommerce application built from scratch for the purpose of **learning and mastering real-world web development concepts** — from authentication to product management, and from cart handling to payment integration.

> ✅ Live Frontend (Vercel): [ecommercewebsite.vercel.app](https://ecommercewebsite.vercel.app)  
> ✅ Live Backend (Render): [ecommercewebsite-server.onrender.com](https://ecommercewebsite-server.onrender.com)

---

## 🎯 Objective

This project was created to gain hands-on experience with:

- **Frontend**: React + Tailwind CSS + Axios
- **Backend**: Node.js + Express.js + MongoDB + JWT Auth
- **Deployment**: Vercel (Client) + Render (Server)
- **Concepts Explored**:
  - Full-featured product CRUD operations
  - Authentication & Authorization (JWT)
  - Cart functionality
  - Payment gateway integration (Razorpay)
  - REST API handling
  - Image uploads (Cloudinary)
  - Admin dashboard basics

---

## 📁 Folder Structure


---

## 🚀 Tech Stack

| Tech           | Description                                 |
|----------------|---------------------------------------------|
| React          | Frontend library                            |
| Tailwind CSS   | Utility-first styling framework             |
| Node.js        | Server-side JS runtime                      |
| Express.js     | Web framework for Node.js                   |
| MongoDB        | NoSQL Database                              |
| Mongoose       | MongoDB ODM for schema + queries            |
| JWT            | User Authentication                         |
| Razorpay       | Payment Gateway                             |
| Cloudinary     | Image hosting & CDN                         |
| Vercel         | Frontend Deployment                         |
| Render         | Backend Deployment                          |

---

## 🧪 Features

- 🔐 User login & admin role support
- 📦 Product list, details, and cart page
- 💳 Razorpay integration (test mode)
- 📁 Image uploads via Cloudinary
- ⚙️ Admin product & user control (CRUD)
- 📱 Fully responsive layout

---

## 📌 Environment Variables

Create `.env` files in both `client/` and `server/` with keys like:

**`server/.env`**
```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret

VITE_API_BASE_URL=https://ecommercewebsite-server.onrender.com
VITE_RAZORPAY_KEY_ID=your_test_key
```
🧭 How to Run Locally
1. Clone Repo
```
git clone https://github.com/aryankardam/EcommerceWebsite.git
cd EcommerceWebsite
```
2. Install Dependencies
```
cd server && npm install
cd ../client && npm install
```
3. Set Up .env Files
4. Run Backend
```
cd server
npm run dev
```
5. Run Frontend
```
cd client
npm run dev
 
