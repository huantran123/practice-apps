import React from 'react';

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  purchase() {
    this.props.purchase();
  }

  render() {
    return (
      <div>
        <div>
          <div>Name: {this.props.name}</div>
          <div>Email: {this.props.email}</div>
          <div>Password: {this.props.password}</div>
          <div>Street Address: {this.props.address}</div>
          <div>Apt#: {this.props.apt}</div>
          <div>City: {this.props.city}</div>
          <div>State: {this.props.state}</div>
          <div>Zip Code: {this.props.zipcode}</div>
          <div>Phone Number: {this.props.phone}</div>
          <div>Credit Card #: {this.props.credit}</div>
          <div>Expiry Date: {this.props.expiry}</div>
          <div>CVV: {this.props.cvv}</div>
          <div>Billing Zip Code: {this.props.billingZip}</div>
          <button onClick={this.purchase.bind(this)}>Purchase</button>
        </div>
      </div>
    )
  }
}

export default Confirmation;