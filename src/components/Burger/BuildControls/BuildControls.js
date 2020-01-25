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
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.ingredientLabel}
        ingredientLabel={ctrl.ingredientLabel}
        addIngredient={() => props.addIngredient(ctrl.type)}
        removeIngredient={props.removeIngredient}
      />
    ))}
  </div>
);

export default BuildControls;
