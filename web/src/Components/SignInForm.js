import React from "react";
import { Form, Input, Button } from 'antd';
import {Link} from "react-router-dom";
import 'antd/dist/antd.css';
import "../Styles/SignInForm.css";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};


export class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
  }

  emailChange(e) {
    this.setState({email : e.target.value})
  }

  passwordChange(e) {
    this.setState({password : e.target.value})
  }


  render() {
    return (
      <div className="signInForm">
        <Form
          {...layout}
          className="login-form"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your Email!',
              },
            ]}
          >
              <Input
                className="formInput"
                placeholder="Insert your email here"
                type="text" onChange={this.emailChange}
              />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
              <Input.Password
                className="formInput"
                type="password" onChange={this.passwordChange}
                placeholder="Your password"
              />
          </Form.Item>

          <Form.Item
            {...tailLayout}
            className="register-link"
          >
            <Button type="primary" onClick={this.submit}
                    className="login-form-button">
              Log in
            </Button>

            <span> or <Link to="/register">register now!</Link> </span>
          </Form.Item>
        </Form>
      </div>
    );
  }
}


