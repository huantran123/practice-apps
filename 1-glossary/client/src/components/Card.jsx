import React from 'react';
import EditForm from './EditForm.jsx';
const Styles = require('../styles.js');

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasEditForm: false,
    }
  }

  openEditForm() {
    this.setState({
      hasEditForm: true,
    })
  }

  closeEditForm() {
    this.setState({
      hasEditForm: false,
    })
  }

  deleteWord() {
    const deletedWord = {
      _id: this.props._id,
      word: this.props.word,
      definition: this.props.definition
    }
    this.props.deleteWord(deletedWord)
  }

  render() {
    return (
      <>
      {this.state.hasEditForm
        ? <div className='box' style={Styles.card}>
            <EditForm
              _id={this.props._id}
              word={this.props.word}
              definition={this.props.definition}
              editWord={this.props.editWord.bind(this)}
              closeEditForm={this.closeEditForm.bind(this)}
            />
          </div>
        : <div className='box' style={Styles.card}>
            <h3 className='word' style={Styles.word}>{this.props.word}</h3>
            <p className='definition' style={Styles.definition}>{this.props.definition}</p>
            <div className='buttons' style={Styles.editDeleteFlex}>
              <button style={Styles.editStyle} onClick={this.openEditForm.bind(this)}>Edit</button>
              <button style={Styles.deleteStyle} onClick={this.deleteWord.bind(this)}>Delete</button>
            </div>
          </div>
      }
      </>
    )
  }
}

export default Card;