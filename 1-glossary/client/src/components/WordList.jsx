import React from 'react';
import WordListEntry from './WordListEntry.jsx';


var WordList = ({words, editWord, deleteWord}) => {

  return (
    <div>
      <ol>
        <h2> List of Words </h2>
        {words.map((wordSet, index) =>
        <WordListEntry editWord={editWord} key={index} word={wordSet} deleteWord={deleteWord}/>
        )}
      </ol>
    </div>
  )

}

export default WordList;