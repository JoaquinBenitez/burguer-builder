import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders.js";
import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner";
import WithErrorHandler from "../../components/hoc/WithErrorHandler";

const INGREDIENT_PRICES = {
  salad: 0.3,
  cheese: 0.5,
  meat: 1.3,
  bacon: 0.6
};

class BurgerBuilder extends Component {
  //no need to use constructor, state do it automatically
  state = {
    ingredients: null,
    totalPrice: 2.0,
    purchaseable: false,
    purchasing: false,
    loading: false,
    error: false
  };

  //fetching initial ingredients from firebase backend:
  componentDidMount() {
    axios
      .get(
        "https://react-burger-builder-joaquin.firebaseio.com/ingredients.json"
      )
      .then(response => {
        this.setState({ ingredients: response.data });
      })
      .catch (error => {
        this.setState({error: true})
      });
  }

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
    this.updatePurchaseableState(updatedIngredients);
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return null;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceSubtracion = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceSubtracion;
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    this.updatePurchaseableState(updatedIngredients);
  };

  updatePurchaseableState = ingredients => {
    const sum = Object.keys(ingredients)
      .map(key => {
        return ingredients[key];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    this.setState({ purchaseable: sum > 0 });
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    //this should be modified as the price should be calculated on serverside
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Joaquin",
        address: {
          street: "Abc 234",
          zipCode: "2003",
          country: "Argentina"
        },
        email: "test@test.com"
      },
      deliveryMethod: "normal"
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false, purchasing: false });
      })
      .catch(error => {
        this.setState({ loading: false, purchasing: false });
      });
  };

  render() {
    //TODO try to do it using map()
    let disabledButton = { ...this.state.ingredients };
    for (let key in disabledButton) {
      disabledButton[key] = disabledButton[key] <= 0;
    }
    let orderSummary = null;

    let loadedIngredients = this.state.error ? <p>Problem loading ingredients</p> : <LoadingSpinner />;
    if (this.state.ingredients) {
      loadedIngredients = (
        <>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            addIngredient={this.addIngredientHandler}
            removeIngredient={this.removeIngredientHandler}
            disabledButton={disabledButton}
            price={this.state.totalPrice}
            purchaseable={this.state.purchaseable}
            ordered={this.purchaseHandler}
          />
        </>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          clickCancel={this.purchaseCancelHandler}
          clickContinue={this.purchaseContinueHandler}
          totalPrice={this.state.totalPrice}
        />
      );
    }
    if (this.state.loading) {
      orderSummary = <LoadingSpinner />;
    }

    return (
      <>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {loadedIngredients}
      </>
    );
  }
}

export default WithErrorHandler(BurgerBuilder, axios);
