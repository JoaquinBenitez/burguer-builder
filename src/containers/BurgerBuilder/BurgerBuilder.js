import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 0.3,
  cheese: 0.5,
  meat: 1.3,
  bacon: 0.6
};

class BurgerBuilder extends Component {
  //no need to use constructor, state do it automatically
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 2
  };

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
  };

  removeIngredientHandler = type => {};

  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
        addIngredient={this.addIngredientHandler}
        removeIngredient={this.removeIngredientHandler}/>
      </>
    );
  }
}

export default BurgerBuilder;
