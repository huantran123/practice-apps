import React from "react";
import ReactDOM from "react-dom";
import $ from 'jquery';
const Styles = require('./styles.js')

import NewWordForm from './components/NewWordForm.jsx'
import Card from './components/Card.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      addExistedWord: false
    };
    this.url = 'http://localhost:2000/words'
  }

  getWords() {
    $.get(this.url)
      .done((words) => {
        this.setState({
          words
        })
      })
      .fail((err) => {
        console.log('Unable to get data')
      })
  }

  componentDidMount() {
    this.getWords();
  }

  addNewWord(wordObj) {
    console.log('Adding new word...')
    $.post(this.url, wordObj)
      .done((words) => {
        if (typeof words === 'string') {
          console.log('Word is already in the list!')
          this.setState({
            addExistedWord: true
          })
        } else {
          console.log('New word is successfully added!')
          this.setState({
            words,
            addExistedWord: false
          })
        }
      })
      .fail(() => {
        console.log('Cannot add word')
      })
  }

  editWord(updatedWord) {
    $.ajax({
      url: this.url,
      type: 'PUT',
      data: updatedWord,
      success: (words) => {
        console.log('Word is successfully updated!')
          this.setState({
            words,
          })
      },
      fail: (err) => {
        console.log('Cannot update word')
      }
    })
  }

  deleteWord(deletedWord) {
    $.ajax({
      url: this.url,
      type: 'DELETE',
      data: deletedWord,
      success: (words) => {
        console.log('Word is successfully deleted!')
          this.setState({
            words,
          })
      },
      fail: (err) => {
        console.log('Cannot delete word')
      }
    })
  }

  render() {
    return (
      <div className='container' style={Styles.container}>
        <NewWordForm addNewWord={this.addNewWord.bind(this)} />
        {
          this.state.addExistedWord
            ? <div style={Styles.errorMess}>Word is already in the list!</div>
            : null
        }
        <div className='cards' style={Styles.cardsFlex}>
          {this.state.words.map((word) => (
            <Card
              key={word._id}
              _id={word._id}
              word={word.word}
              definition={word.definition}
              editWord={this.editWord.bind(this)}
              deleteWord={this.deleteWord.bind(this)}
            />
          ))}
        </div>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));