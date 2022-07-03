import React from 'react'
import Checkout from './Checkout.jsx'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      checkoutClicked: false,
      hideCheckout: false,
      sameSessionId: false,
    }
  this.handleCheckoutClick = this.handleCheckoutClick.bind(this);
  this.hideCheckoutButton = this.hideCheckoutButton.bind(this);
  this.checkSessionId = this.checkSessionId.bind(this);
  }

  // Set up a componentDidMount life cycle for checkSessionId.
  componentDidMount() {
    this.checkSessionId();
  }

  handleCheckoutClick () {
    this.setState({checkoutClicked: true})
  }

  hideCheckoutButton(formData) {
    formData.session_id = document.cookie;
    this.setState({hideCheckout: true});
    axios.post('/checkout', {
      formData,
    })
    .then(() => this.checkSessionId())
    .catch((error) => console.log('Error adding order data to database.', error))
    // First check if handleCheckoutCLick is true,
    // Run this upon submit, and disable checkout button by invoking checkSessionId.
  }

  checkSessionId () {
    // send get request to see if current sessionId exist in database.
      //if so change sameSessionId to true in state.
      // console.log('inside check');
    axios.get('/checkout', {
      data: {cookie: document.cookie}})
      .then((response) => {
        this.setState=({sameSessionId: true});
      })
      .catch( () => {
        console.log("New user confirmed.");
      })
  }

  render() {
    const { checkoutClicked, hideCheckout, sameSessionId } = this.state;
    let button;

    return (
      <div>
        {/* <p>
          <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
        </p> */}

        {button = <button type="text" onClick={this.handleCheckoutClick} disabled={sameSessionId}>Ready to Checkout?</button>}

        {checkoutClicked && <Checkout hideCheckoutButton={this.hideCheckoutButton}/>}
      </div>
    )
  }
}
export default App;




// Render the checkout state on Confirmation Page, Have a Purchase button set up to AXIOS Post request

// Set up an axios POST that aquires the checkout state.