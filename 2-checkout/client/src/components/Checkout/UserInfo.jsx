import React from 'react'

const UserInfo = ({ nextStep, handleChange, values}) => {

  const nextForm = e => {
    e.preventDefault()
    nextStep();
  }


  return (
    <div>
      <form>
        User Information
        <input type='text' value={values.name} onChange={handleChange('name')} placeholder='Name Here' />
        <input type='text' value={values.email} onChange={handleChange('email')} placeholder='Email Here' />
        <input type='text' value={values.password} onChange={handleChange('password')} placeholder='Password Here' />
        <button onClick={ nextForm }> Next </button>
      </form>
    </div>
  )
}

export default UserInfo;