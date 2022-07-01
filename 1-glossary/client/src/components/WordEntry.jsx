import React from 'react';

class WordEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {word: '', definition: ''};

    this.handleWordChange = this.handleWordChange.bind(this);
    this.handleDefinitionChange = this.handleDefinitionChange.bind(this);
    this.handleSubmit = this.handleSumbit.bind(this);
  }

  handleSumbit () {
    //A function will be passed from App.jsx that we will then pass back the current state value.
    this.props.addWord(this.state);
  }

  handleWordChange (event) {
    this.setState({word: event.target.value})
  }

  handleDefinitionChange (event) {
    this.setState({definition: event.target.value})
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.word} onChange={(e) => this.handleWordChange(e)} />
          <input type="text" value={this.state.definition} onChange={(e) => this.handleDefinitionChange(e)}/>
        </form>
        <input disabled={!this.state.word} disabled={!this.state.definition} onClick={this.handleSubmit} type="submit" value= "Add Word"/>
      </div>
    )
  }

}

export default WordEntry;