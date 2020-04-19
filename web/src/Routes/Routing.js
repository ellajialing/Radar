import React from "react";
import { Route} from "react-router-dom";
import ReactDOM from 'react-dom';
import {Home} from "./Home";

function Routing(props) {
  const content = props.routes.map((route) =>
    <Route path={route.route} component={route.name}/>
  );
  return(
    <ul>
      {content}
    </ul>
  );
}

const data = [
  {route: '/', name: Home},
  {route: '/solutions', name: 'Solutions'},
  {route: '/contact', name: 'Contact'},
  {route: '/about', name: 'About'},
];

ReactDOM.render(
  <Routing routes={data} />,
  document.getElementById('root')
);
