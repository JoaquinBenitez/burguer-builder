import React from "react";
import styles from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { ingredientLabel: "Salad", type: "salad" },
  { ingredientLabel: "Bacon", type: "bacon" },
  { ingredientLabel: "Cheese", type: "cheese" },
  { ingredientLabel: "Meat", type: "meat" }

];

const BuildControls = props => (
  <div className={styles.BuildControls}>
    <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.ingredientLabel}
        ingredientLabel={ctrl.ingredientLabel}
        disabledButton={props.disabledButton[ctrl.type]}
        addIngredient={() => props.addIngredient(ctrl.type)}
        removeIngredient={() => props.removeIngredient(ctrl.type)}
      />
    ))}
  </div>
);

export default BuildControls;
