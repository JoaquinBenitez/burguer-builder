import React, { Component } from "react";
import CheckoutSummary from "../../components/Burger/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0
    }
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for (let param of query.entries()) {
      ingredients[param[0]] = +param[1];
    }
    //console.log(ingredients);
    this.setState({ ingredients: ingredients });
  }

  cancelButtonHandler = () => {
    this.props.history.goBack();
  };

  continueButtonHandler = () => {
    this.props.history.replace("/checkout/contact-data");
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
