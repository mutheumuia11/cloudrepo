const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

// MySQL database connection configuration
const db = mysql.createConnection({
  host: 'localhost',
  user: 'bug',
  password: 'EricTroy1994',
  database: 'Farm',
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
})
