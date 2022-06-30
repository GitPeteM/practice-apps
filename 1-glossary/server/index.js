require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
const {saveWord, getWords} = require("./db.js");


// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

app.delete('/glossary', (req, res) => {

})

app.put('/glossary', (req, res) => {

})

app.get('/glossary', (req, res) => {
  // console.log('server get');
  getWords()
    .then( wordData => {
      res.status(201).send(wordData);
    })
    .catch( err => {
      res.status(404).send("There are no words in the glossary.");
    })
})

app.post('/glossary', (req, res) => {
  // console.log('inside post:', req.body);

  saveWord(req.body)
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
