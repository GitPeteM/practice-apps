const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/glossary')

let wordSchema = new mongoose.Schema({
  word: {type: String, unique: true},
  definition: String
})

let Glossary = mongoose.model('Glossary', wordSchema);

exports.saveWord = (wordObj) => {
  let input = new Glossary({
    word: wordObj.word,
    definition: wordObj.definition
  })
  return Glossary.findOneAndUpdate({word: wordObj.word}, input, {upsert: true});

}

exports.getWords = () => {return Glossary.find();}

exports.removeWord = (wordObj) => {return Glossary.deleteOne({word: wordObj.word});}

exports.updateWord = (wordObj) => {
  return Glossary.updateOne({word: wordObj.word}, {definition: wordObj.definition});
}

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
