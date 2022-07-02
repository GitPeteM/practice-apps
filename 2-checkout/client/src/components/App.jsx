import React from 'react'
import Checkout from './Checkout.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      checkoutHidden = true;
    }
  }

  render() {
    return (
      <div>
        <p>
          <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
        </p>
        <Checkout />
      </div>
    )
  }
}
export default App;




// Conditional Render, checkout as a button if clicked renders checkout.

// Render the checkout state on Confirmation Page, Have a Purchase button set up to AXIOS Post request

// Set up an axios POST that aquires the checkout state.