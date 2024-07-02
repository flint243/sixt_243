import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql2';
import cors from 'cors';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = resolve(fileURLToPath(import.meta.url), '..');

const app = express();
const port = 5178;

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'limaykongo', // replace with your MySQL root password
    database: 'car_rental'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

app.use(cors({
  origin: '*', // Permettre toutes les origines
  methods: ['GET', 'POST'], // Permettre les méthodes GET et POST
  allowedHeaders: ['Content-Type'], // Permettre l'en-tête Content-Type
}));

app.use(bodyParser.json());

// Define API routes first
app.get('/car-options', (req, res) => {
    const makeQuery = 'SELECT DISTINCT carMake FROM reservations';
    const typeQuery = 'SELECT DISTINCT carType FROM reservations';
    const priceQuery = 'SELECT DISTINCT rentPrice FROM reservations';

    const carOptions = {};

    db.query(makeQuery, (err, makeResults) => {
        if (err) return res.status(500).send(err);
        carOptions.carMakes = makeResults.map(row => row.carMake);

        db.query(typeQuery, (err, typeResults) => {
            if (err) return res.status(500).send(err);
            carOptions.carTypes = typeResults.map(row => row.carType);

            db.query(priceQuery, (err, priceResults) => {
                if (err) return res.status(500).send(err);
                carOptions.rentPrices = priceResults.map(row => row.rentPrice);

                res.status(200).json(carOptions);
            });
        });
    });
});

app.post('/car-options', (req, res) => {
    const { carMake, carType, search, rentPrice } = req.body;

    const query = 'INSERT INTO reservations (carMake, carType, search, rentPrice) VALUES (?, ?, ?, ?)';

    db.query(query, [carMake, carType, search, rentPrice], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Database error');
        } else {
            res.status(200).json({ message: 'Reservation made successfully', id: result.insertId });
        }
    });
});

// Serve static files
app.use(express.static(resolve(__dirname, 'dist')));

// Catch-all to serve React's index.html for any other routes
app.get('*', (req, res) => {
    res.sendFile(resolve(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
