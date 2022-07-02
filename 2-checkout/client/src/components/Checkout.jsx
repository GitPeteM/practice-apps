import React from 'react'
import UserInfo from './Checkout/UserInfo.jsx'


export default class Checkout extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      step: 1,
      name: '',
      email: '',
      password: '',
      lineOne: '',
      lineTwo: '',
      city: '',
      zipCode: '',
      phoneNumber: '',
      creditCard: '',
      expiryDate: '',
      cvv: '',
      billingZipCode: ''
    }
  }

  prevStep() => {
    const { step } = this.state;
    this.setState({step: step - 1 });
  }

  nextStep() => {
    const { step } = this.state;
    this.setState({step: step + 1});
  }

  handleChange = input => e => {
    this.setState({ [input]: e.target.value })

  }



  render() {
    let { step } = this.state;
    let { name, email, password, lineOne, lineTwo, city, zipCode, phoneNumber, creditCard, expiryDate, cvv, billingZipCode } = this.state;
    let values = {name, email, password, lineOne, lineTwo, city, zipCode, phoneNumber, creditCard, expiryDate, cvv, billingZipCode};
    switch(step) {
      case 1:
        return (
          <UserInfo
          nextStep={ this.nextStep }
          handleChange={ this.handleChange}
          values={ values }
          />
        )
      case 2:
        return (
          <ShippingInfo
          prevStep={ this.prevStep }
          nextStep={ this.nextStep }
          handleChange={ this.handleChange}
          values={ values }
          />
        )
      case 3:
        return (
          <PaymentInfo
          prevStep={ this.prevStep }
          nextStep={ this.nextStep }
          handleChange={ this.handleChange}
          values={ values }
          />
        )
      case 4:
        return (
          <Confirmation
          prevStep={ this.prevStep }
          nextStep={ this.nextStep }
          values={ values }
          />
        )
    default:
    }
  }
}