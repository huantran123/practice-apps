import React from 'react';

class F2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      apt: '',
      city: '',
      state: '',
      zipcode: '',
      phone: ''
    }
  }

  onAddressChange(e) {
    this.setState({
      address: e.target.value
    })
  }

  onAptChange(e) {
    this.setState({
      apt: e.target.value
    })
  }

  onCityChange(e) {
    this.setState({
      city: e.target.value
    })
  }

  onStateChange(e) {
    this.setState({
      state: e.target.value
    })
  }

  onZipcodeChange(e) {
    this.setState({
      zipcode: e.target.value
    })
  }

  onPhoneChange(e) {
    this.setState({
      phone: e.target.value
    })
  }

  next() {
    const info = {
      address: this.state.address,
      apt: this.state.apt,
      city: this.state.city,
      state: this.state.state,
      zipcode: this.state.zipcode,
      phone: this.state.phone
    }
    this.props.openF3(info);
  }

  render() {
    return (
      <div>
        <div className='field'>
          <label htmlFor="name">Street Address: </label>
          <input type="text" name='address' value={this.state.address} onChange={this.onAddressChange.bind(this)} required />
        </div>
        <div className='field'>
          <label htmlFor="apt">Apt#: </label>
          <input type="text" name='apt' value={this.state.apt} onChange={this.onAptChange.bind(this)} />
        </div>
        <div className='field'>
          <label htmlFor="city">City: </label>
          <input type="text" name='city' value={this.state.city} onChange={this.onCityChange.bind(this)} required />
        </div>
        <div className='field'>
          <label htmlFor="state">State: </label>
          <input type="text" name='state' value={this.state.state} onChange={this.onStateChange.bind(this)} required />
        </div>
        <div className='field'>
          <label htmlFor="zipcode">Zip Code: </label>
          <input type="tel" name='zipcode' pattern='[0-9]{5}' value={this.state.zipcode} onChange={this.onZipcodeChange.bind(this)} required />
        </div>
        <div className='field'>
          <label htmlFor="phone">Phone Number: </label>
          <input type="tel" name='phone' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' value={this.state.phone} onChange={this.onPhoneChange.bind(this)} required />
        </div>
        <div>
          <button onClick={this.next.bind(this)}>Next</button>
        </div>
      </div>
    )
  }
}

export default F2;