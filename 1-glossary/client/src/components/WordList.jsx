import React from 'react';
import WordListEntry from './WordListEntry.jsx';


var WordList = ({words}) => {

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colspan="2"> List of Words </th>
          </tr>
        </thead>
        {words.map((wordSet, index) =>
        <WordListEntry key={index} word={wordSet} />
        )}
      </table>
    </div>
  )

}


export default WordList;