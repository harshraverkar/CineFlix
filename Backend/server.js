    const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express()
app.use(cors())
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user: "root",
    password: "Harsh",
    database: "user"
});
db.connect((err) => {
    if (err) {
        console.error("Failed to connect to the database:", err.message);
        process.exit(1);  // Exit the process with an error code
    }
    console.log("Connected to the database.");
});

app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;

    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.query(query, [name, email, password], (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: error.message });
        }
        res.json({ success: true, message: 'Sign Up Successful' });
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // We query the database to find a user with the given email
    const query = 'SELECT password FROM users WHERE email = ?';
    
    db.query(query, [email], (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: error.message });
        }

        if (results.length === 0) {
            return res.status(400).json({ success: false, message: 'User not found' });
        }

        const dbPassword = results[0].password;

        // For now, we're doing a simple comparison. In a real-world scenario, 
        // you'd be comparing hashed passwords, not plain text.
        if (dbPassword !== password) {
            return res.status(400).json({ success: false, message: 'Incorrect password' });
        }

        // If email found and password matches
        res.json({ success: true, message: 'Login Successful' });
    });
});

app.get('/', (re, res)=> {
    return res.json("From BAckend side");
})

app.listen(8081, ()=> {
    console.log("listening");
})