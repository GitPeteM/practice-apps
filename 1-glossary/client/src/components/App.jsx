import React, { useState } from 'react';
import WordList from './WordList.jsx';
import WordEntry from './WordEntry.jsx';
import WordSearch from './WordSearch.jsx';
import axios from 'axios';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      glossary: [],
      // {word: word, definition: definition},
    };

    this.addWordToGlossary = this.addWordToGlossary.bind(this);
    this.searchGlossary = this.searchGlossary.bind(this);
    this.editWord = this.editWord.bind(this);
    this.deleteWord = this.deleteWord.bind(this);
    this.searchForWord = this.searchForWord.bind(this);
  }

  componentDidMount() { this.searchGlossary(); }

  // Axios POST request on wordEntry Request
  addWordToGlossary(newWord) {
    // console.log(' Add success');
    axios.post('/glossary', newWord)
      .then((response) => { this.searchGlossary() })
      .catch((error) => alert("An error occurred saving the new Word."));
  }

  // Axios GET request for the entire database
  searchGlossary() {
    axios.get('/glossary')
      .then((wordData) => {
        this.setState({ glossary: wordData.data })
      })
      .catch((error) => console.log("An error occured collecting the glossary list.", error));
  }

  //Axios PUT request on Edit Button(wordListEntry)
  editWord(wordEdits) {
    axios.put('/glossary', wordEdits)
      .then((wordData) => {
        // upon successful request, call searchGlossary()
        this.searchGlossary();
      })
      .catch((error) => alert(error))
  }

  //Axios DELETE request on Delete Button (wordListEntry)
  deleteWord(deleteWord) {
    axios.delete('/glossary', { data: { word: deleteWord } });
    this.searchGlossary();
  }

  //filter function; filter by search input in WordSearch.jsx
  searchForWord(wordToSearch) {

    let newGlossary = [];

    // Use filter to change glossary, to be only wordToSearch.
    newGlossary = this.state.glossary.filter(word => {
      if (word.word === wordToSearch.word) {
        return word;
      }
    })
    this.setState({ glossary: newGlossary });
  }

  render() {
    const { glossary, search, wordSearch } = this.state;
    return (
      <div>
        <WordEntry addWord={this.addWordToGlossary} />
        <WordSearch search={this.searchForWord} reset={this.searchGlossary}/>
        <WordList words={glossary} editWord={this.editWord} deleteWord={this.deleteWord} />
      </div>
    )
  }
}

export default App;

