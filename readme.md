# Node.js Assignments

**Name:** Daksh Ranjan Srivastava  
**Roll No:** 150096725087  
**Cohort:** Jeff Bezos  

---

## Assignment 1 — Basic JavaScript Programs

### 1. Shopping Cart
Created a shopping cart program to calculate item prices, discounts, tax, and final cart value.

### 2. User Profile
Created a user profile using variables, objects, arrays, and a greeting function.

### 3. Library Management System
Created a library system to add books, borrow books, return books, and display available books.

### 4. Multiplication Table
Created a program that generates the multiplication table of a given number.

### 5. ATM Withdrawal
Created an ATM withdrawal program that handles multiple withdrawals and checks available balance.

### 6. First Even Number
Created a program to find the first even number from an array.

### 7. Print Days
Created a program to display the day of the week using the current date.

### 8. Grading System
Created a grading program that assigns grades based on the marks obtained.

---

## Assignment 2 — JSON Validation & Student Registration

### 9. JSON Validation API
Created an API that accepts student data and validates the name, age, and email before processing the request.

### 10. RTO Registration
Created an RTO registration system that stores student and vehicle registration details in a JSON file.

### 11. Student Registration
Created a student registration API that accepts student details and stores registered students in a JSON file along with their registration time.

---

# Major Assignment 1 — RailConnect Live Ops Dashboard

Created a RailConnect Live Operations Dashboard to process railway operational data.

The dashboard includes:

- Occupancy summary
- Revenue breakdown
- Station load analysis
- Vulnerable passenger identification
- Waiting-list clearance planning
- Combined operational dashboard

---

# Major Assignment 2 — E-Commerce Website API

Created an E-Commerce API with product management and user authentication.

### Product APIs

- Get all products
- Get product by ID
- Add a new product
- Update a product
- Delete a product

### Authentication APIs

- User signup
- User login

### Validation

- Email validation
- Password validation
- Age validation
- Duplicate email prevention

Product and user information is stored using JSON files.

---

# Major Assignment 3 — User Registration & Authentication API

Created a User Registration and Authentication API using a structured folder architecture.

### Signup

- User registration
- Email format validation
- Minimum 8-character password
- Uppercase character validation
- Lowercase character validation
- Digit validation
- Special character validation
- Duplicate email prevention

### Authentication

- User login using email and password

### User APIs

- Get all users
- Get user by ID

### Middleware

- Request validation middleware
- Request logging middleware

### Folder Structure

```text
Major_assignment_3/
│
├── data/
│   └── users.json
│
├── middleware/
│   ├── logger.js
│   └── validation.js
│
├── models/
│   └── userModel.js
│
├── controllers/
│   └── userController.js
│
├── routes/
│   └── userRoutes.js
│
└── server.js