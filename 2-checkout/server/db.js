const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  // .then(() => {
  //   return db.queryAsync(
  //     `CREATE DATABASE checkout`
  //   );
  // })
  // .then(() => {
  //   return db.queryAsync(
  //     `USE checkout`
  //   );
  // })
  .then(() => {
    return db.queryAsync(
      `CREATE TABLE IF NOT EXISTS user (
        session_id VARCHAR(100) UNIQUE,
        name VARCHAR(50) NOT NULL,
        email VARCHAR(50) NOT NULL,
        password VARCHAR(30) NOT NULL,
        PRIMARY KEY (session_id)
      );`
    )
  })
  .then( () =>
    db.queryAsync(
      `CREATE TABLE IF NOT EXISTS orders (
        order_id INT AUTO_INCREMENT,
        addressone VARCHAR(50) NOT NULL,
        addresstwo VARCHAR(50),
        city VARCHAR(20) NOT NULL,
        zipcode VARCHAR(20) NOT NULL,
        phonenumber VARCHAR(20),
        creditcard VARCHAR(20) NOT NULL,
        expiration VARCHAR(10) NOT NULL,
        cvv VARCHAR(5) NOT NULL,
        billingzip VARCHAR(20) NOT NULL,
        user_id VARCHAR(100),
        PRIMARY KEY (order_id),
        FOREIGN KEY (user_id) REFERENCES user(session_id)
      );`
    )
  )
  .catch((err) => console.log(err));

module.exports = db;



// NOTES :
// create database inside the terminal. Cant create the database inside of db.js.
// Were PromisyfingAll the connect and queries, therefore we need to add ASync at the end of each function.


