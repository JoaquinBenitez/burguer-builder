import React, { Component } from "react";
import CustomButton from "../../UI/Button/CustomButton";

class OrderSummary extends Component {  
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      key => {
        return (
          <li key={key}>
            <span style={{ textTransform: "capitalize" }}>{key}</span>:{" "}
            {this.props.ingredients[key]}
          </li>
        );
      }
    );

    return (
      <>
        <h4>Your order:</h4>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          Total price: <strong>{this.props.totalPrice.toFixed(2)}</strong>{" "}
        </p>
        <p>Continue to checkout?</p>
        <CustomButton btnType="Cancel" clicked={this.props.clickCancel}>
          {" "}
          CANCEL{" "}
        </CustomButton>
        <CustomButton btnType="Continue" clicked={this.props.clickContinue}>
          {" "}
          CONTINUE{" "}
        </CustomButton>
      </>
    );
  }
}

export default OrderSummary;
