import React from 'react';
import UserInfo from './Checkout/UserInfo.jsx';
import ShippingInfo from './Checkout/ShippingInfo.jsx';
import PaymentInfo from './Checkout/PaymentInfo.jsx';
import Confirmation from './Checkout/Confirmation.jsx';


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
    this.prevStep = this.prevStep.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  prevStep() {
    const { step } = this.state;
    this.setState({step: step - 1 });
  }

  nextStep() {
    const { step } = this.state;
    this.setState({step: step + 1});
  }

  handleChange = input => e => {
    this.setState({ [input]: e.target.value })

  }

  submitForm() {
    // invoke a function in app.jsx that activates an AXIOS post request

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
          submitForm={ this.submitForm }
          values={ values }
          />
        )
    default:
    }
  }
}