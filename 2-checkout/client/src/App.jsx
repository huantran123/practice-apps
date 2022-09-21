import React from 'react';
import $ from 'jquery'

import F1 from './components/F1.jsx';
import F2 from './components/F2.jsx';
import F3 from './components/F3.jsx';
import Confirmation from './components/Confirmation.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      address: '',
      apt: '',
      city: '',
      state: '',
      zipcode: '',
      phone: '',
      credit: '',
      expiry: '',
      cvv: '',
      billingZip: '',
      home: true,
      F1: false,
      F2: false,
      F3: false,
      Confirmation: false
    }
    this.url = '/'
  }

  openF1() {
    this.setState({
      home: false,
      F1: true
    })
  }

  openF2(F1Info) {
    const {name, email, password} = F1Info;
    console.log(F1Info)
    this.setState({
      name,
      email,
      password,
      F1: false,
      F2: true
    })
  }

  openF3(F2Info) {
    const {address, apt, city, state, zipcode, phone} = F2Info;
    console.log(F2Info)
    this.setState({
      address,
      apt,
      city,
      state,
      zipcode,
      phone,
      F2: false,
      F3: true,
    })
  }

  openConfirmation(F3Info) {
    const {credit, expiry, cvv, billingZip} = F3Info;
    console.log(F3Info)
    this.setState({
      credit,
      expiry,
      cvv,
      billingZip,
      F3: false,
      Confirmation: true
    })
  }

  purchase() {
    const info = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      address: this.state.address,
      apt: this.state.apt,
      city: this.state.city,
      state: this.state.state,
      zipcode: this.state.zipcode,
      phone: this.state.phone,
      credit: this.state.credit,
      expiry: this.state.expiry,
      cvv: this.state.cvv,
      billingZip: this.state.billingZip,
    }
    $.post(this.url, info)
      .done((data) => {
        console.log(data)
        this.setState({
          name: '',
          email: '',
          password: '',
          address: '',
          apt: '',
          city: '',
          state: '',
          zipcode: '',
          phone: '',
          credit: '',
          expiry: '',
          cvv: '',
          billingZip: '',
          Confirmation: false,
          home: true
        })
      })
      .fail((err) => {
        console.log('Cannot make purchase')
      })
  }

  render() {
    return (
      <div>
        { this.state.home && <button onClick={this.openF1.bind(this)}>Checkout</button> }
        { this.state.F1 && <F1 openF2={this.openF2.bind(this)}/> }
        { this.state.F2 && <F2 openF3={this.openF3.bind(this)}/> }
        { this.state.F3 && <F3 openConfirmation={this.openConfirmation.bind(this)}/> }
        {this.state.Confirmation &&
          <Confirmation
            name={this.state.name}
            email={this.state.email}
            password={this.state.password}
            address={this.state.address}
            apt={this.state.apt}
            city={this.state.city}
            state={this.state.state}
            zipcode={this.state.zipcode}
            phone={this.state.phone}
            credit={this.state.credit}
            expiry={this.state.expiry}
            cvv={this.state.cvv}
            billingZip={this.state.billingZip}
            purchase={this.purchase.bind(this)}/>
        }
      </div>
    )
  }
}

export default App;