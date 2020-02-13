import React, { Component } from "react";
import CustomButton from "../../../components/UI/CustomButton/CustomButton";
import styles from './ContactData.module.css';

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    }
  };
  render() {
    return (
      <div className={styles.ContactData}>
        <h4>Enter your contact data: </h4>
        <form>
          <input type="text" name="name" placeholder="Name" />
          <input type="mail" name="email" placeholder="Email" />
          <input type="text" name="street" placeholder="Street" />
          <input type="text" name="postal" placeholder="Postal code" />
        </form>
        <CustomButton btnType="Continue"> ORDER </CustomButton>
      </div>
    );
  }
}

export default ContactData;
