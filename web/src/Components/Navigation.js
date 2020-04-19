import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import '../Styles/Navigation.css';

export class Navigation extends React.Component {
  render() {
    return(
      <Container>
        <Row>
          <Col>
            <ul>
              <li className="active"><Link to="/">{'Home'}</Link></li>
              <li><Link to="/solutions">{'Solutions'}</Link></li>
              <li><Link to="/contact">{'Contact Us'}</Link></li>
              <li><Link to="/about">{'About'}</Link></li>
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}
