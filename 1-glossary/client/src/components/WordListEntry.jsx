import React from 'react';

class WordListEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputHidden: true,
      word: this.props.word.word,
      definition: this.props.word.definition,
    };
    this.editWordInput = this.editWordInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  editWordInput () {
    this.props.editWord(this.state);
    this.setState({inputHidden: true})
  }

  handleClick () {
    this.setState({inputHidden: false})
  }

  handleChange (event) {
    this.setState({definition: event.target.value})

  }

  render() {
    const {word, deleteWord} = this.props;
    return (
      <li>
        {word.word}
        <br></br>
        <input value={this.state.definition} readOnly={this.state.inputHidden} onDoubleClick={this.handleClick} onChange={(e) => {this.handleChange(e)}} />

        <button type='button' onClick={this.editWordInput}>Edit</button>

        <button type='button' onClick={() => {deleteWord(word.word)}}>Delete</button>
      </li>
    )
  }

}


export default WordListEntry;