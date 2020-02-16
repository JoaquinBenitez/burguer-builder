import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";


import CheckoutSummary from "../../components/Burger/CheckoutSummary/CheckoutSummary";
import DataOfContact from "./DataOfContact/DataOfContact";

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
    //this is to get the ingredients from previous order
    for (let param of query.entries()) {
      ingredients[param[0]] = +param[1];
    }
    //console.log(ingredients);
    this.setState({ ingredients: ingredients });
  }

  cancelButtonHandler = () => {
    this.props.history.goBack();
  };

  //TODO: this isn't working anymore, will need to use withRouter() HOC
  continueButtonHandler = () => {
    this.props.history.push("/contact-data");
  };

  render() {
    /*<Route
          path={this.props.match.path + '/contact-data'}
          component={DataOfContact}
    />*/
    return (
      <div>
        <Route
          path={this.props.match.path + "/contact-data"}
          component={DataOfContact}
        />
        
        <CheckoutSummary
          checkoutCancel={this.cancelButtonHandler}
          checkoutContinue={this.continueButtonHandler}
          ingredients={this.state.ingredients}
        />        
      </div>
    );
  }
}

export default withRouter(Checkout);
