import React from 'react';

var WordListEntry = ({word}) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>
          {word.word}
          </td>
          <td>
          {word.definition}
          </td>
          <button type='button'>Edit</button>
          <button type='button'>Delete</button>
        </tr>
      </tbody>
    </table>
  )

}


export default WordListEntry;