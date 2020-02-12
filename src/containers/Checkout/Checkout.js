import React, { Component } from "react";
import CheckoutSummary from "../../components/Burger/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      cheese: 2,
      meat: 3,
      bacon: 0
    }
  };

  cancelButtonHandler = () => {
    this.props.history.goBack();
  };

  continueButtonHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          checkoutCancel={this.cancelButtonHandler}
          checkoutContinue={this.continueButtonHandler}
          ingredients={this.state.ingredients}
        />
      </div>
    );
  }
}

export default Checkout;
