import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import styles from "./Burger.module.css";

const Burger = props => {
  //need to convert Obj to Arr to use map
  /*
  const arrayOfIngredients = Object.keys(props.ingredients).map(ingKey => {
    return [...Array(props.ingredients[ingKey])].map((_, i) => {
      return <BurgerIngredient key={ingKey + i} type={ingKey} />;
    });
  });
  */
  //doing the logic on my own instead of just copying:
  const arrayIngredients = Object.keys(props.ingredients).map(key => {
    // console.log(arrayIngredients[key]); arIng["salad"], arIng["meat"] etc -> undefined
    return [...Array(props.ingredients[key])].map((k, i) => {
      //console.log([...Array(props.ingredients[key])]); this returns [undefined] or [undef, undef] or more
      //console.log(k, i); key is undefined and i is the index, i is useful for the key of the list
      return <BurgerIngredient key={key + i} type={key} />;
    });
  });

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {arrayIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
