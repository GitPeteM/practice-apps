import React from 'react'

const PaymentInfo = ({ prevStep, nextStep, handleChange, values}) => {

  const priorForm = e => {
    e.preventDefault();
    prevStep();
  }

  const nextForm = e => {
    e.preventDefault()
    nextStep();
  }

  return (
    <div>
       <form>
        Payment Information
        <input type='text' value={values.creditCard} onChange={handleChange('creditCard')} placeholder='credit card number' />
        <input type='text' value={values.expiryDate} onChange={handleChange('expiryDate')} placeholder='Expiration Date' />
        <input type='text' value={values.cvv} onChange={handleChange('cvv')} placeholder='cvv code' />
        <input type='text' value={values.billingZipCode} onChange={handleChange('billingZipCode')} placeholder='Billing Zipcode' />
        <button onClick={ priorForm }> Previous </button>
        <button onClick={ nextForm }> Next </button>
      </form>
    </div>
  )
}

export default PaymentInfo;