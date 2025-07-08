# Shop

A full-stack demo e-commerce project built with HTML, CSS, JavaScript (frontend), and Node.js with MongoDB (backend). This project demonstrates key concepts of the MVC (Model-View-Controller) pattern and includes separate interfaces for customers and administrators.

## Features

### Customer Functionality

- View product listings and details
- Add products to a shopping cart
- Edit cart contents
- Register and log in
- Place orders and view order history

### Admin Functionality

- Secure login and dashboard access
- Manage products (add, edit, delete)
- View and manage all customer orders
- Update order statuses (pending, fulfilled, canceled)

## Technologies Used

### Frontend

- HTML
- CSS
- JavaScript (browser-side)

### Backend

- Node.js
- Express.js
- MongoDB (Mongoose)
- Session-based authentication

## Views and Pages

**Shared:**

- Signup / Login pages

**Customer Pages:**

- Home / All Products
- Product Details
- Shopping Cart
- Order Confirmation & History

**Admin Pages:**

- Admin Dashboard
- Product Management
- Order Management

## Data Models

- **User**: email, password, name, address, isAdmin
- **Product**: title, summary, description, price, image
- **Cart**: managed via session; includes product items and total price
- **Order**: user data, ordered items, timestamp, and status

---

This project is structured to help understand full-stack development with clear separation of concerns using the MVC architecture.
