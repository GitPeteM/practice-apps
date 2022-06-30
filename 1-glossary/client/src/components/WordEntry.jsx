import React from 'react';

class WordEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {entry: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSumbit.bind(this);
  }

  handleSumbit (event) {
    preventDefault();
    alert("We Clickin!", event);
    //A function will be passed from App.jsx that we will then pass back the current state value.
  }

  handleChange (event) {
    this.setState({entry: event.target.value})
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={(e) => this.handleChange(e)} />
        </form>
        <input disabled={!this.state.entry} type="submit" value= "Add Word"/>
      </div>
    )
  }

}

export default WordEntry;