const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());

const productsFile = "data/products.json";
const usersFile = "data/users.json";

// Get all products
app.get("/products", (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFile));
    res.status(200).json(products);
});

// Get product by ID
app.get("/products/:id", (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFile));
    const product = products.find(p => p.id === Number(req.params.id));

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
});

// Add product
app.post("/products", (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFile));

    const product = {
        id: Date.now(),
        name: req.body.name,
        price: req.body.price,
        category: req.body.category
    };

    products.push(product);
    fs.writeFileSync(productsFile, JSON.stringify(products, null, 2));

    res.status(201).json(product);
});

// Update product
app.put("/products/:id", (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFile));
    const index = products.findIndex(p => p.id === Number(req.params.id));

    if (index === -1) {
        return res.status(404).json({ message: "Product not found" });
    }

    products[index] = {
        ...products[index],
        ...req.body
    };

    fs.writeFileSync(productsFile, JSON.stringify(products, null, 2));

    res.status(200).json(products[index]);
});

// Delete product
app.delete("/products/:id", (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFile));
    const index = products.findIndex(p => p.id === Number(req.params.id));

    if (index === -1) {
        return res.status(404).json({ message: "Product not found" });
    }

    products.splice(index, 1);
    fs.writeFileSync(productsFile, JSON.stringify(products, null, 2));

    res.status(200).json({ message: "Product deleted successfully" });
});

// Signup
app.post("/signup", (req, res) => {
    const users = JSON.parse(fs.readFileSync(usersFile));

    const { name, email, password, age } = req.body;

    if (!email.includes("@")) {
        return res.status(400).json({ message: "Invalid email" });
    }

    if (typeof age !== "number") {
        return res.status(400).json({ message: "Age must be a number" });
    }

    if (password.length < 8) {
        return res.status(400).json({ message: "Password must be at least 8 characters" });
    }

    if (users.some(user => user.email === email)) {
        return res.status(400).json({ message: "Email already registered" });
    }

    const user = {
        id: Date.now(),
        name,
        email,
        password,
        age
    };

    users.push(user);
    fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));

    res.status(201).json({ message: "Signup successful" });
});

// Login
app.post("/login", (req, res) => {
    const users = JSON.parse(fs.readFileSync(usersFile));

    const user = users.find(
        user =>
            user.email === req.body.email &&
            user.password === req.body.password
    );

    if (!user) {
        return res.status(400).json({ message: "Invalid email or password" });
    }

    res.status(200).json({ message: "Login successful" });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
