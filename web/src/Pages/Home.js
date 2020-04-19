import React from "react";
import {Navigation} from "../Components/Navigation";
import {FormBackground} from "../Components/FormBackground"
import {SignInForm} from "../Components/SignInForm"

export class Home extends React.Component {
  render() {
    return(
      <div>
        <Navigation/>
        <FormBackground/>
        <SignInForm/>
      </div>
    );
  }
}
