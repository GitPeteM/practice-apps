import React from 'react';
import WordList from './Wordlist.jsx';
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
  }

  componentDidMount() {this.searchGlossary();}

  // Axios POST request on wordEntry Request
  addWordToGlossary (newWord) {
    // console.log(' Add success');
    axios.post('/glossary', newWord)
      .then((response) => {this.searchGlossary()})
      .catch((error) => alert("An error occurred saving the new Word."));
  }

  // Axios GET request for the entire database
  searchGlossary () {
    // console.log('Search success');
    axios.get('/glossary')
      .then((wordData) => {
        console.log(wordData);
        this.setState({glossary: wordData.data})
    })
      .catch((error) => alert("An error occured collecting the glossary list."))
  }

  //Axios PUT request on Edit Button(wordListEntry)

  //Axios DELETE request on Delete Button (wordListEntry)



  render() {
    return (
      <div>
        <WordEntry addWord={this.addWordToGlossary}/>
        <WordSearch/>
        <WordList words = {this.state.glossary}/>
      </div>
    )
  }
}

export default App;

