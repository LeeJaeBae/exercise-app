import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const LoginForm = styled.form``;
const InputId = styled.input``;
const InputPassword = styled.input``;

class LoginPresenter extends Component {
  render() {
    const { handleId, handleSubmit, handleClick, id, password } = this.props;
    return (
      <LoginForm>
        <InputId
          placeholder="please input ID"
          type="text"
          onChange={handleId}
        ></InputId>
        <InputPassword
          placeholder="PASSWORD"
          type="password"
          onChange={handleSubmit}
        ></InputPassword>
        <input type="button" value="click" onClick={handleClick} />
        <p>{id}</p>
        <p>{password}</p>
      </LoginForm>
    );
  }
}

LoginPresenter.propTypes = {
  id: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleId: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleClick: PropTypes.func
};

export default LoginPresenter;
