const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/glossary')

let wordSchema = new mongoose.Schema({
  word: {type: String, unique: true},
  definition: String
})

let Glossary = mongoose.model('Glossary', wordSchema);

let saveWord = (wordObj) => {
  console.log('saveWord', wordObj);

  let input = new Glossary({
    word: wordObj.word,
    definition: wordObj.definition
  })
  return Glossary.findOneAndUpdate({word: wordObj.word}, input, {upsert: true});

}

// let Peter = new Glossary({word: 'Pete', definition: 'We did It'});
// console.log(Peter);

let getWords = () => {
  return Glossary.find({}).exec();
  // return new Promise({resolve, reject} => {
  //   Glossary.find({})
  //     .then( results => {
  //       resolve(results);
  //     })
  // })
}

let getSpecificWord = () => {}



module.exports.saveWord = saveWord;
module.exports.getWords = getWords;

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
