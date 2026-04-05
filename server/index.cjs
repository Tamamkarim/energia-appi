// Simple Express backend for authentication and energy data
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pool = require('./db');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

// Luo käyttäjätaulu, jos sitä ei ole olemassa
pool.query(`CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
)`, (err) => {
  if (err) console.error('DB error:', err);
});

// Uuden käyttäjän rekisteröinti
app.post('/api/register', (req, res) => {
  const { username, password } = req.body;
  pool.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
    if (err) return res.status(500).json({ message: 'Tietokantavirhe' });
    if (results.length > 0) return res.status(400).json({ message: 'Käyttäjä on jo olemassa' });
    pool.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], (err2) => {
      if (err2) return res.status(500).json({ message: 'Tietokantavirhe' });
      res.json({ message: 'Rekisteröinti onnistui' });
    });
  });
});

// Kirjautuminen
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  pool.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, results) => {
    if (err) return res.status(500).json({ message: 'Tietokantavirhe' });
    if (results.length === 0) return res.status(401).json({ message: 'Virheelliset tunnistetiedot' });
    res.json({ message: 'Kirjautuminen onnistui', username });
  });
});

// Energian kulutustiedot (testidata)
app.get('/api/energy', (req, res) => {
  res.json({
    hourly: Array.from({ length: 24 }, (_, i) => ({ hour: i, value: Math.floor(Math.random() * 5) + 1 })),
    daily: Array.from({ length: 30 }, (_, i) => ({ day: i + 1, value: Math.floor(Math.random() * 100) + 50 })),
    monthly: Array.from({ length: 12 }, (_, i) => ({ month: i + 1, value: Math.floor(Math.random() * 300) + 200 })),
  });
});

// Endpoint: Laskutiedot (testidata)
app.get('/api/bills', (req, res) => {
  res.json([
    { id: 1, amount: '150 €', date: '2026-03-01', status: 'Maksettu' },
    { id: 2, amount: '140 €', date: '2026-02-01', status: 'Ei maksettu' },
    { id: 3, amount: '160 €', date: '2026-01-01', status: 'Maksettu' },
  ]);
});

// Testisopimusdata (voidaan yhdistää tietokantaan myöhemmin)
const contractSample = {
  subscription: '123456',
  power: '5 kW',
  endDate: '2026-12-31',
  billDetails: '150 €',
};

// Endpoint: Sopimustiedot
app.get('/api/contract', (req, res) => {
  res.json(contractSample);
});

// Endpoint: Lataa sopimus (testi PDF)
app.get('/api/contract/download', (req, res) => {
  // Lisää tähän oikean sopimustiedoston polku tai luo testitiedosto
  const filePath = __dirname + '/sample-contract.pdf';
  res.download(filePath, 'sopimus.pdf');
});

app.listen(PORT, () => {
  console.log(`Palvelin käynnissä osoitteessa http://localhost:${PORT}`);
});
