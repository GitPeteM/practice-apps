import React from 'react'

const Confirmation = ({prevStep, submitForm, values}) => {

  const priorForm = e => {
    e.preventDefault();
    prevStep();
  }

  const submit = e => {
    e.preventDefault()
    submitForm();
  }

  return (
    <div>
      <button onClick={ priorForm }> Previous </button>
      <button onClick={ submit }> Submit Order </button>
    </div>
  )
}

export default Confirmation;