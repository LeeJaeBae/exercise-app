import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Id = styled.div``;

class ExercisePresenter extends Component {
  static defaultProps = {
    id: 0
  };
  render() {
    return <Id>{this.props.id}</Id>;
  }
}
ExercisePresenter.propTypes = {
  id: PropTypes.string
};

export default ExercisePresenter;
