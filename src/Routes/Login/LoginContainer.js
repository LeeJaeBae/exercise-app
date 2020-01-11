import React, { Component } from "react";
import LoginPresenter from "./LoginPresenter";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "default",
      password: "PASSWORD",
      _id: "",
      _password: ""
    };
  }
  handleId = e => {
    this.setState({ _id: e.target.value });
  };
  handleSubmit = e => {
    this.setState({ _password: e.target.value.toUpperCase() });
  };
  handleClick = e => {
    this.setState({
      id: this.state._id,
      password: this.state._password
    });
    console.log(this.state);
  };

  render() {
    const { id, password } = this.state;
    const { handleClick, handleId, handleSubmit } = this;
    return (
      <LoginPresenter
        id={id}
        password={password}
        handleId={handleId}
        handleSubmit={handleSubmit}
        handleClick={handleClick}
      />
    );
  }
}

export default LoginContainer;
