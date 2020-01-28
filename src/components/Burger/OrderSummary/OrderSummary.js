import React from "react";
import CustomButton from "../../UI/Button/CustomButton";

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(key => {
    return (
      <li key={key}>
        <span style={{ textTransform: "capitalize" }}>{key}</span>:{" "}
        {props.ingredients[key]}
      </li>
    );
  });
  return (
    <>
      <h4>Your order:</h4>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        Total price: <strong>{props.totalPrice.toFixed(2)}</strong>{" "}
      </p>
      <p>Continue to checkout?</p>
      <CustomButton btnType="Cancel" clicked={props.clickCancel}>
        {" "}
        CANCEL{" "}
      </CustomButton>
      <CustomButton btnType="Continue" clicked={props.clickContinue}>
        {" "}
        CONTINUE{" "}
      </CustomButton>
    </>
  );
};

export default OrderSummary;
