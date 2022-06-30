import React from 'react';
import WordList from './Wordlist.jsx';
import WordEntry from './WordEntry.jsx';
import WordSearch from './WordSearch.jsx';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      glossary: [{word: 'Peter', definition: "Test1"}, {word: 'Mentos', definition: "Gum"}],

      // {word: word, definition: definition},
    };
  }

  render() {
    return (
      <div>
        <WordEntry/>
        <WordSearch/>
        <WordList words = {this.state.glossary}/>
      </div>
    )
  }
}

export default App;

