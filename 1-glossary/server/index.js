require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
const {saveWord} = require("./db.js");
const {getWords} = require('./db.js');


// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

app.delete('/glossary', (req, res) => {

})

app.put('/glossary', (req, res) => {

})

app.get('/glossary', (req, res) => {
  getWords()
    .then( wordList => {
      // console.log('get', wordList);
      res.status(201).send(wordList);
    })
    .catch( err => {
      res.status(404).send(err);
    })

})

app.post('/glossary', (req, res) => {
  // console.log(req);

  saveWord(req.query)
    .then( words => {
      // console.log('post', req.body);
      res.sendStatus(200);
    })
    .catch( err => {
      res.status(404).send(err);
    })

})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
