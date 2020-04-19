import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {Home} from "./Home";
import {Solutions} from "./Solutions";
import {Contact} from "./Contact";
import {About} from "./About";
import {Register} from "./Register";

export class Main extends React.Component {
  render(){
    return(
      <div>
        <BrowserRouter>
          <Route exact path={'/'} component={Home}/>
          <Route path={'/solutions'} component={Solutions}/>
          <Route path={'/contact'} component={Contact}/>
          <Route path={'/about'} component={About}/>
          <Route path={'/register'} component={Register}/>
        </BrowserRouter>
      </div>
    );
  }
}
