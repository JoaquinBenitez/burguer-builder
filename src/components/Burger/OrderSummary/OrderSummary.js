import React from "react";

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
      <h4> Your order:</h4>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout?</p>
    </>
  );
};

export default OrderSummary;
