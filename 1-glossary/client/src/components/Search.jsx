import React from 'react';
const Styles = require('../styles.js')

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onSearchChange(event) {
    this.setState({
      term: event.target.value
    })
    this.props.searchWord(event.target.value)
  }

  render() {
    return (
      <div className='search-form' style={Styles.form}>
        <div className='field'>
          <h3>Search Word</h3>
          <input style={Styles.input} type="text" name='search' value={this.state.term} onChange={this.onSearchChange.bind(this)} />
        </div>
      </div>
    )
  }
}

export default Search;