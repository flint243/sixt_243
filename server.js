const express = require("express");  // Importation du module express
const mysql = require("mysql");  // Importation du module mysql
const cors = require("cors");  // Importation du module cors pour gérer les politiques de partage de ressources cross-origin
const bcrypt = require("bcrypt");  // Importation du module bcrypt pour le hachage des mots de passe

const app = express();  // Création de l'application Express
app.use(cors());  // Utilisation de cors pour permettre les requêtes cross-origin
app.use(express.json());  // Middleware pour analyser les corps de requêtes JSON

const db = mysql.createConnection({
    host: "localhost",  // Hôte de la base de données
    user: "root",  // Nom d'utilisateur de la base de données
    password: "",  // Mot de passe de la base de données
    database: "localxit_dt"  // Nom de la base de données
});

// Endpoint pour l'inscription
app.post("/localxit_dt", async (req, res) => {
    const { surname, name, email, phone, password } = req.body;  // Extraction des données du corps de la requête

    const saltRounds = 10;  // Nombre de tours pour le sel de bcrypt
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);  // Hachage du mot de passe

        const sql = "INSERT INTO clients (nom_Clients, prenom_Clients, email_Clients, telephone_Clients, mot_de_passe_Clients) VALUES (?, ?, ?, ?, ?)";
        const values = [surname, name, email, phone, hashedPassword];  // Préparation des valeurs pour l'insertion dans la base de données

        db.query(sql, values, (err, data) => {  // Exécution de la requête SQL
            if (err) {
                return res.json(err);  // Retourne l'erreur si la requête échoue
            } else {
                return res.json(data);  // Retourne les données si la requête réussit
            }
        });
    } catch (error) {
        return res.status(500).json({ error: "Error hashing password" });  // Retourne une erreur 500 en cas d'échec du hachage
    }
});

// Nouveau endpoint pour la connexion
app.post("/signin", (req, res) => {
    const { email, password } = req.body;  // Extraction des données du corps de la requête

    const sql = "SELECT * FROM clients WHERE email_Clients = ?";
    db.query(sql, [email], async (err, data) => {  // Exécution de la requête SQL pour récupérer le client par email
        if (err) {
            return res.json(err);  // Retourne l'erreur si la requête échoue
        }
        if (data.length === 0) {
            return res.status(401).json({ message: "Invalid email or password" });  // Retourne une erreur 401 si l'email est invalide
        }

        const client = data[0];  // Récupération des données du client
        const isPasswordValid = await bcrypt.compare(password, client.mot_de_passe_Clients);  // Comparaison du mot de passe fourni avec le mot de passe haché

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid email or password" });  // Retourne une erreur 401 si le mot de passe est invalide
        }

        res.status(200).json({ message: "Logged in successfully", client });  // Retourne un message de succès et les données du client si la connexion est réussie
    });
});

app.listen(8002, () => {
    console.log("Listening...");  // Démarrage du serveur sur le port 8002 et affichage d'un message dans la console
});
