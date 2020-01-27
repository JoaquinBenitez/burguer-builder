import React from "react";
import classes from "./BuildControl.module.css";

const BuildControl = props => (
  <div className={classes.BuildControl}>
    <div className={classes.IngridientLabel}>{props.ingredientLabel}</div>
    <button
      className={classes.Remove}
      onClick={props.removeIngredient}
      disabled={props.disabledButton}
    >
      Remove
    </button>
    <button className={classes.Add} onClick={props.addIngredient}>
      Add
    </button>
  </div>
);

export default BuildControl;
