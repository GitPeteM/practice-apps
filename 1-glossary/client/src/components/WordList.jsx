import React from 'react';
import WordListEntry from './WordListEntry.jsx';


var WordList = ({words}) => {

  return (
    <div>
      <ol>
        <h2> List of Words </h2>
        {words.map((wordSet, index) =>
        <WordListEntry key={index} word={wordSet} />
        )}
      </ol>
    </div>
  )

}


export default WordList;