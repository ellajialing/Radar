import React from "react";
import {Navigation} from "../Components/Navigation";
import {FormBackground} from "../Components/FormBackground";
import {RegisterForm} from "../Components/RegisterForm"

export class Register extends React.Component {
  render() {
    return(
      <div>
        <Navigation/>
        <FormBackground/>
        <RegisterForm/>
      </div>
    );
  }
}
