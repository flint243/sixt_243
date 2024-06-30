import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
const port = 5000;

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

app.use(cors());
app.use(bodyParser.json());

app.get('/car-options', (req, res) => {
  const makeQuery = 'SELECT DISTINCT carMake FROM cars';
  const typeQuery = 'SELECT DISTINCT carType FROM cars';
  const priceQuery = 'SELECT DISTINCT rentPrice FROM cars';

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

app.post('/reserve', (req, res) => {
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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
