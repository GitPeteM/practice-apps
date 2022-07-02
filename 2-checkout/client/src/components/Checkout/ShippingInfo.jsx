import React from 'react'

const ShippingInfo = ({ prevStep, nextStep, handleChange, values }) => {

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
        Shipping Information
        <input type='text' value={values.lineOne} onChange={handleChange('lineOne')} placeholder='line 1' />
        <input type='text' value={values.lineTwo} onChange={handleChange('lineTwo')} placeholder='line 2' />
        <input type='text' value={values.city} onChange={handleChange('city')} placeholder='City' />
        <input type='text' value={values.zipCode} onChange={handleChange('zipCode')} placeholder='ZipCode' />
        <input type='text' value={values.phoneNumber} onChange={handleChange('phoneNumber')} placeholder='Phone Number' />
        <button onClick={ priorForm }> Previous </button>
        <button onClick={ nextForm }> Next </button>
      </form>
    </div>
  )
}

export default ShippingInfo;