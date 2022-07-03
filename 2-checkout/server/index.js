require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const db = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());


app.post('/checkout', (req, res) => {
  // console.log(req.body);
  const { name, email, password, lineOne, lineTwo, city, zipCode, phoneNumber, creditCard, expiryDate, cvv, billingZipCode, session_id } = req.body.formData;
  db.queryAsync(`INSERT INTO user (session_id, name, email, password) VALUES (?,?,?,?)`, [session_id, name, email, password])
  .then(() => {
    db.queryAsync(`INSERT INTO orders (addressone, addresstwo, city, zipcode, phonenumber, creditcard, expiration, cvv, billingzip) VALUES (?,?,?,?,?,?,?,?,?)`, [lineOne, lineTwo, city, zipCode, phoneNumber, creditCard, expiryDate, cvv, billingZipCode])
  })
  .then(() => {
    res.sendStatus(201);
  })
  .catch((error) => {
    res.send(error);
  })

})

app.get('/checkout', (req, res) => {
  // call a function inside db to send a query request, can be set up with callbacks or promises.
  // console.log(req);
  db.queryAsync(`SELECT * FROM user WHERE session_id = req.session_id`)
  .then( () => {
    res.sendStatus(200);
  })
  .catch( (error) => {
    res.sendStatus(404);
  });

})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);

