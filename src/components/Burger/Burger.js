import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import styles from "./Burger.module.css";

const Burger = props => {
  //need to convert Obj to Arr to use map
  const arrayOfIngredients = Object.keys(props.ingredients).map(ingKey => {
    return [...Array(props.ingredients[ingKey])].map((_, i) => {
      
      return <BurgerIngredient key={ingKey + i} type={ingKey} />;
    });
  });

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {arrayOfIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
