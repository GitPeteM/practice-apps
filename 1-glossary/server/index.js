require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
const {saveWord, getWords, removeWord, updateWord} = require("./db.js");


// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

app.delete('/glossary', (req, res) => {
  removeWord(req.body)
    .then( results =>{
      res.sendStatus(201)
    })
    .catch( err => {
      res.status(404).send("The request word was not found.");
    })

})

app.put('/glossary', (req, res) => {
  updateWord(req.body)
    .then( results => {
      res.sendStatus(204)
    })
    .catch( err => {
      res.status(404).send("Could not save changes to Glossary.");
    })
})

app.get('/glossary', (req, res) => {
  getWords()
    .then( wordData => {
      res.status(201).send(wordData);
    })
    .catch( err => {
      res.status(404).send("There are no words in the glossary.");
    })
})

app.post('/glossary', (req, res) => {

  saveWord(req.body)
    .then( words => {
      res.sendStatus(200);
    })
    .catch( err => {
      res.status(404).send(err);
    })

})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
