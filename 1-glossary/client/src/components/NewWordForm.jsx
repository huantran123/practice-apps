import React from 'react';
const Styles = require('../styles.js')

class NewWordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      definition: ''
    }
  }

  onWordChange(event) {
    this.setState({
      word: event.target.value
    })
  }

  onDefinitionChange(event) {
    this.setState({
      definition: event.target.value
    })
  }

  addNewWord() {
    const newWord = {
      word: this.state.word,
      definition: this.state.definition
    }
    this.props.addNewWord(newWord);
    this.setState({
      word: '',
      definition: ''
    })
  }


  render() {
    return (
      <div className='new-word-form' style={Styles.form}>
        <h2>Add New Word:</h2>
        <div className='field'>
          <label htmlFor="word">Word: </label>
          <input type="text" name='word' value={this.state.word} onChange={this.onWordChange.bind(this)} />
        </div>
        <div className='field'>
          <label htmlFor="definition">Definition: </label>
          <input type="text" name='definiton' value={this.state.definition} onChange={this.onDefinitionChange.bind(this)} />
        </div>
        <button style={Styles.primaryButton} onClick={this.addNewWord.bind(this)}> Add </button>
      </div>
    )
  }
}

export default NewWordForm;