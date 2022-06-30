import React from 'react';

var WordListEntry = ({word}) => {
  return (
    <li>
      {word.word}
      {word.definition}
      <button type='button'>Edit</button>
      <button type='button'>Delete</button>
    </li>
  )

}


export default WordListEntry;