import React from 'react';
const Styles = require('../styles.js');

class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: this.props.word,
      definition: this.props.definition
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

  editWord() {
    const updatedWord = {
      _id: this.props._id,
    }
    this.props.editWord(updatedWord);
    this.props.closeEditForm();
  }

  render() {
    return (
      <div className='edit-forn' style={Styles.form}>
        <div className='field'>
          <label htmlFor="word">Word: </label>
          <input type="text" name='word' value={this.state.word} onChange={this.onWordChange.bind(this)} />
        </div>
        <div className='field'>
          <label htmlFor="definition">Definition: </label>
          <input type="text" name='definiton' value={this.state.definition} onChange={this.onDefinitionChange.bind(this)} />
        </div>
        <div style={Styles.buttonsFlex}>
          <button style={Styles.primaryButton} onClick={this.editWord.bind(this)}> Save </button>
          <button style={Styles.secondaryButton} onClick={this.props.closeEditForm.bind(this)}> Cancel </button>
        </div>
      </div>
    )
  }
}

export default EditForm;