import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import styles from './DataOfContact.module.css';

import CustomButton from "../../../components/UI/CustomButton/CustomButton";

class DataOfContact extends Component {
  /*state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    }
  }; */

  render() {
    return (
      <div className={styles.DataOfContact}>
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

export default withRouter(DataOfContact);
