import React from 'react';

class F3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credit: '',
      expiry: '',
      cvv: '',
      billingZip: ''
    }
  }

  onCreditChange(e) {
    this.setState({
      credit: e.target.value
    })
  }

  onExpiryChange(e) {
    this.setState({
      expiry: e.target.value
    })
  }

  onCvvChange(e) {
    this.setState({
      cvv: e.target.value
    })
  }

  onBillingZipChange(e) {
    this.setState({
      billingZip: e.target.value
    })
  }

  next() {
    const info = {
      credit: this.state.credit,
      expiry: this.state.expiry,
      cvv: this.state.cvv,
      billingZip: this.state.billingZip
    }
    this.props.openConfirmation(info);
  }

  render() {
    return (
      <div>
        <div className='field'>
          <label htmlFor="credit">Credit Card #: </label>
          <input type="tel" name='credit' pattern='[0-9\s]{13,19}' maxLength='19' value={this.state.credit} onChange={this.onCreditChange.bind(this)} required />
        </div>
        <div className='field'>
          <label htmlFor="expiry">Expiry Date: </label>
          <input type="tel" name='expiry' pattern='[1-12]{1} / [22-30]{1}' value={this.state.expiry} onChange={this.onExpiryChange.bind(this)} required />
        </div>
        <div className='field'>
          <label htmlFor="cvv">CVV: </label>
          <input type="tel" name='cvv' pattern='[0-9]{3}' value={this.state.cvv} onChange={this.onCvvChange.bind(this)} required />
        </div>
        <div className='field'>
          <label htmlFor="billing-zip">Billing Zip Code: </label>
          <input type="text" name='billing-zip' pattern='[0-9]{5}' value={this.state.billingZip} onChange={this.onBillingZipChange.bind(this)} required />
        </div>
        <div>
          <button onClick={this.next.bind(this)}>Next</button>
        </div>
      </div>
    )
  }
}

export default F3;