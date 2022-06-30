import React from 'react';

class WordSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {word: ''};

    this.submit = this.submit.bind(this);
    this.handleWordChange = this.handleWordChange.bind(this);
  }

  submit () {
    // alert("We Clickin!", event);
    //A function will be passed from App.jsx that we will then pass back the current state value.

  }

  handleWordChange (e) {
    this.setState({word: e.target.value})
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" value={this.state.word} onChange={(e) => this.handleWordChange(e)}/>
          <button onClick={this.submit} disabled={!this.state.word}>Word Search</button>
        </form>
      </div>
    )
  }

}

export default WordSearch;