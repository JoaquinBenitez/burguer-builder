import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  //no need to use constructor, state do it automatically
  state = {
    ingredients: {
      salad: 1,
      bacon: 2,
      cheese: 1,
      meat: 2
    }
  }

  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients}/>
        <div>Build controllers</div>
      </>
    );
  }
}

export default BurgerBuilder;
