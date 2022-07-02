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
      <form>

      </form>
    </div>
  )
}

export default Confirmation;