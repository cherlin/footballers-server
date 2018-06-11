const express = require('express');
const cors = require('cors');
const logger = require('morgan');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(logger());

app.get('/hello', (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT;
const host = process.env.HOSTNAME;
app.listen(port, host, () => {
  console.log(`Server running at ${host}:${port}`);
});

/*
TODO:
Läs in CSV-fil.
Parsa till JS-objekt
Håll koll på så att filen inte ändras - om ändras - läs in och parsa på nytt.
Tillgängliggör relevanta API endpoints: 
* /api/players -> id, namn och lag.
* /api/player/:id -> full spelarspec.
*/