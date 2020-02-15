import React from "react";
import styles from "./CheckoutSummary.module.css";

import Burger from "../Burger";
import CustomButton from "../../UI/CustomButton/CustomButton";

const CheckoutSummary = props => {
  return (
    <div className={styles.CheckoutSummary}>
      <h1>Hope you enjoy your burger!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>

      <CustomButton btnType="Cancel" clicked={props.checkoutCancel}>
        CANCEL
      </CustomButton>
      <CustomButton btnType="Continue" clicked={props.checkoutContinue}>
        CONTINUE
      </CustomButton>
    </div>
  );
};

export default CheckoutSummary;
