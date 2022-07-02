import React from 'react'
import Checkout from './Checkout.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render () {
    return (
      <div>
        <Checkout />
      </div>
    )
  }
}
export default App;