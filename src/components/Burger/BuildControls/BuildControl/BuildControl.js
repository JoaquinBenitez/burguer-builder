import React from "react";
import styles from "./BuildControl.module.css";

const BuildControl = props => (
  <div className={styles.BuildControl}>
    <div className={styles.IngridientLabel}>{props.ingredientLabel}</div>
    <button
      className={styles.Remove}
      onClick={props.removeIngredient}
      disabled={props.disabledButton}
    >
      Remove
    </button>
    <button className={styles.Add} onClick={props.addIngredient}>
      Add
    </button>
  </div>
);

export default BuildControl;
