import React from 'react';

class F1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  onNameChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  onEmailChange(e) {
    this.setState({
      email: e.target.value
    })
  }

  onPasswordChange(e) {
    this.setState({
      password: e.target.value
    })
  }

  next() {
    const info = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }
    this.props.openF2(info);
  }

  render() {
    return (
      <div>
        <div className='field'>
          <label htmlFor="name">Name: </label>
          <input type="text" name='name' value={this.state.name} onChange={this.onNameChange.bind(this)} required />
        </div>
        <div className='field'>
          <label htmlFor="email">Email: </label>
          <input type="email" name='email' pattern='.+@globex\.com' value={this.state.email} onChange={this.onEmailChange.bind(this)} required />
        </div>
        <div className='field'>
          <label htmlFor="password">Password: </label>
          <input type="password" name='password' value={this.state.password} onChange={this.onPasswordChange.bind(this)} required />
        </div>
        <div>
          <button onClick={this.next.bind(this)}>Next</button>
        </div>
      </div>
    )
  }
}

export default F1;