import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "./Burger.module.css";

const Burger = props => {
  //need to convert Obj to Arr to use map
  //doing the logic on my own instead of just copying:
  let arrayIngredients = Object.keys(props.ingredients)
    .map(key => {
      // console.log(arrayIngredients[key]); arIng["salad"], arIng["meat"] etc -> undefined
      return [...Array(props.ingredients[key])].map((k, i) => {
        //console.log([...Array(props.ingredients[key])]); this returns [undefined] or [undef, undef] or more
        //console.log(k, i); key is undefined and i is the index, i is useful for the key of the list
        return <BurgerIngredient key={key + i} type={key} />;
      });
    })
    //to make it show a msg when there are no ingredients, you need reduce:
    .reduce((arr, el) => {
      //concatening the current elem to the previous, but works when there are ingredients too
      return arr.concat(el);
    }, []);

  if (arrayIngredients.length === 0) {
    arrayIngredients = <p>Please start adding ingredients</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {arrayIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
