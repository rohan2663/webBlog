# 📝 **MERN Stack Web Blog**

Welcome to **MERN Stack Web Blog**! This project is a full-fledged blog platform built using the **MERN stack** (MongoDB, Express, React, Node.js). It allows two types of users—**READER** and **AUTHOR**—to interact with the blog content. 🚀

## 🧑‍💻 **Features**

### 📖 **Reader:**
- 🟢 **View Blog Posts**: Readers can browse and read blog posts.
- ❌ **No Dashboard Access**: The dashboard is hidden from Readers.
- 🔒 **Limited Permissions**: Readers can only view content and do not have any CRUD (Create, Read, Update, Delete) privileges.

### ✍️ **Author:**
- ✅ **Dashboard Access**: Authors have access to the dashboard.
- 📝 **Create Blog Posts**: Authors can create new blog posts.
- ✏️ **Update Blog Posts**: Authors can edit their own blog posts.
- 🗑️ **Delete Blog Posts**: Authors can delete their own blog posts.

## 🛠️ **Technologies Used**
- **MongoDB**: For storing blog posts and user information.
- **Express**: As the backend framework.
- **React**: For the frontend.
- **Node.js**: For running the backend.
- **JWT (JSON Web Token)**: For user authentication and authorization.

## 🧑‍🔧 **User Roles and Permissions**

### **Reader**:
- Can **read** blog posts only.
- Cannot access the **dashboard** or modify content.

### **Author**:
- Can **create**, **update**, and **delete** their own blog posts.
- Has access to the **dashboard** for managing their posts.

## 🔐 **Authentication & Authorization**

This project uses **JWT (JSON Web Tokens)** for authentication and role-based access control.
- When a user logs in, a token is issued with their role (either **reader** or **author**).
- **Protected routes** ensure only **authors** can perform actions like creating, updating, or deleting blog posts.