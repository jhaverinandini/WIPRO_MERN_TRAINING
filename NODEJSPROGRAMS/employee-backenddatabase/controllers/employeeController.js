const db = require("../db/connection");

exports.registerEmployee = (req, res) => {

    const { name, email, department } = req.body;

    // 1️⃣ Check required fields
    if (!name || !email || !department) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    // 2️⃣ Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return res.status(400).json({
            message: "Invalid email format"
        });
    }

    // 3️⃣ Insert query
    const sql = "INSERT INTO employees (name, email, department) VALUES (?, ?, ?)";

    db.query(sql, [name, email, department], (err, result) => {

        if (err) {

            // 4️⃣ Handle duplicate email
            if (err.code === "ER_DUP_ENTRY") {
                return res.status(400).json({
                    message: "Email already exists"
                });
            }

            return res.status(500).json({
                message: "Server error"
            });
        }

        return res.status(201).json({
            message: "Employee registered successfully"
        });
    });
};