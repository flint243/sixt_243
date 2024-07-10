// const express = require("express");
// const cors = require("cors");
// const mysql = require("mysql");

// const app = express();
// app.use(express.json());
// app.use(cors());

// // MySQL connection
// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "mydatabase"
// })

// app.get("/", (req, res) => {
//     const sql = "SELECT * FROM student"
//     db.query(sql, (err, data) => {
//         if(err) return res.json("Error");
//         return res.json(data);
//     });
// });

// app.post('/create', (req, res) => {
//     const sql = "INSERT INTO student (`Name`, `Email`) VALUES(?)";
//     const values = [
//         req.body.name,
//         req.body.email
//     ]
//     db.query(sql, [values], (err, data) =>{
//         if(err) return res.json("Error");
//         return res.json(data)
//     })
// })


// app.put('/update/:id', (req, res) => {
//     const sql = "update student set `Name` = ?, `Email` = ? where ID = ?";
//     const values = [
//         req.body.name,
//         req.body.email
//     ]

//     const id = req.params.id;

//     db.query(sql, [...values, id], (err, data) =>{
//         if(err) return res.json("Error");
//         return res.json(data)
//     })
// })

// app.delete('/student/:id', (req, res) => {
//     const sql = "DELETE FROM student WHERE ID = ?";
//     const id = req.params.id;

//     db.query(sql, [id], (err, data) => {
//         if(err) return res.json("Error");
//         return res.json(data);
//     })
// })

// app.listen(8081, () => {
//     console.log("listening");
// })
const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(express.json());
app.use(cors());

// MySQL connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydatabase"
});

db.connect(err => {
    if (err) {
        console.error("Error connecting to the database:", err);
        return;
    }
    console.log("Connected to the database.");
});

app.get("/", (req, res) => {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    });
});

app.post('/create', (req, res) => {
    const sql = "INSERT INTO users (Name, Email) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email
    ];
    db.query(sql, [values], (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    });
});

// app.put('/update/:id', (req, res) => {
//     const sql = "update users set `Name` = ?, `Email` = ? where ID = ?";
//     const values = [
//         req.body.name,
//         req.body.email
//     ];

//     const id = req.params.id;

//     db.query(sql, [...values, id], (err, data) => {
//         if(err) return res.json("Error");
//         return res.json(data);
//     });
// });

app.put('/update/:id', (req, res) => {
    const sql = "UPDATE users SET `Name` = ?, `Email` = ? WHERE ID = ?";
    const values = [
        req.body.name,
        req.body.email
    ];

    const id = req.params.id;

    db.query(sql, [...values, id], (err, data) => {
        if (err) {
            console.log(err);
            return res.json("Error");
        }
        console.log('Update result:', data);
        return res.json(data);
    });
});





app.delete('/student/:id', (req, res) => {
    const sql = "DELETE FROM users WHERE ID = ?";
    const id = req.params.id;

    db.query(sql, [id], (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    });
});

app.listen(8081, () => {
    console.log("listening on port 8");
});


// const express = require("express");
// const mysql = require("mysql");
// const cors = require("cors");
// const bcrypt = require("bcrypt");

// const app = express();
// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//     host: process.env.DB_HOST || "localhost",
//     user: process.env.DB_USER || "root",
//     password: process.env.DB_PASSWORD || "",
//     database: process.env.DB_NAME || "site_location"
// });

// db.connect((err) => {
//     if (err) {
//         console.error("Error connecting to the database:", err);
//     } else {
//         console.log("Connected to the database");
//     }
// });

// // Endpoint pour l'inscription
// app.post("/site_location", (req, res) => {
//     const { surname, name, email, phone, password } = req.body;
//     if (!surname || !name || !email || !phone || !password) {
//         return res.status(400).json({ error: "All fields are required" });
//     }
//     console.log("Received registration request:", { surname, name, email, phone });

//     // Vérification si l'email ou le numéro de téléphone existe déjà
//     const checkSql = "SELECT * FROM clients WHERE email_Clients = ? OR telephone_Clients = ?";
//     db.query(checkSql, [email, phone], (checkErr, checkData) => {
//         if (checkErr) {
//             console.error("Error checking existing user:", checkErr);
//             return res.status(500).json({ error: "Error checking existing user" });
//         }
//         if (checkData.length > 0) {
//             return res.status(409).json({ error: "Email or phone number already exists" });
//         }

//         // Hachage du mot de passe
//         bcrypt.hash(password, 10, (hashErr, hash) => {
//             if (hashErr) {
//                 console.error("Error hashing password:", hashErr);
//                 return res.status(500).json({ error: "Error hashing password" });
//             }

//             // Insertion des données dans la base
//             const sql = "INSERT INTO clients (nom_Clients, prenom_Clients, email_Clients, telephone_Clients, mot_de_passe_Clients) VALUES (?, ?, ?, ?, ?)";
//             const values = [surname, name, email, phone, hash];

//             db.query(sql, values, (insertErr, data) => {
//                 if (insertErr) {
//                     console.error("Error inserting data:", insertErr);
//                     return res.status(500).json({ error: "Error inserting data" });
//                 } else {
//                     console.log("User registered with hashed password:", hash);
//                     return res.status(201).json({ message: "User registered successfully", data });
//                 }
//             });
//         });
//     });
// });

// // Nouveau endpoint pour la connexion
// app.post("/signin", (req, res) => {
//     const { email, password } = req.body;
//     if (!email || !password) {
//         return res.status(400).json({ error: "Email and password are required" });
//     }
//     console.log("Received signin request:", { email, password });

//     const sql = "SELECT * FROM clients WHERE email_Clients = ?";
//     db.query(sql, [email], (err, data) => {
//         if (err) {
//             console.error("Error querying database:", err);
//             return res.status(500).json({ error: "Error querying database" });
//         }
//         if (data.length === 0) {
//             console.log("No user found with email:", email);
//             return res.status(401).json({ error: "Invalid email or password" });
//         }

//         const client = data[0];
//         console.log("User found:", client);

//         bcrypt.compare(password, client.mot_de_passe_Clients, (compareErr, result) => {
//             if (compareErr) {
//                 console.error("Error comparing passwords:", compareErr);
//                 return res.status(500).json({ error: "Error comparing passwords" });
//             }
//             if (!result) {
//                 console.log("Password does not match for user:", email);
//                 return res.status(401).json({ error: "Invalid email or password" });
//             }

//             console.log("Password matches for user:", email);
//             res.status(200).json({ message: "Logged in successfully", client });
//         });
//     });
// });

// // Endpoint pour les messages de contact
// app.post("/contactus", (req, res) => {
//     const { name, email, message } = req.body;
//     if (!name || !email || !message) {
//         return res.status(400).json({ error: "All fields are required" });
//     }
//     console.log("Received contact message:", { name, email, message });

//     const sql = "INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)";
//     const values = [name, email, message];

//     db.query(sql, values, (err, data) => {
//         if (err) {
//             console.error("Error inserting contact message:", err);
//             return res.status(500).json({ error: "Error inserting contact message" });
//         } else {
//             console.log("Contact message inserted successfully");
//             return res.status(201).json({ message: "Contact message sent successfully", data });
//         }
//     });
// });


// app.listen(8002, () => {
//     console.log("Listening on port 8002...");
// });