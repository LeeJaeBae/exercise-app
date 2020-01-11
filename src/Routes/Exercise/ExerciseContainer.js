import React, { Component } from "react";
import ExercisePresenter from "./ExercisePresenter";

class ExerciseContainer extends Component {
  // constructor(props) {
  //   super(props);
  //   const {
  //     match: {
  //       params: { id }
  //     }
  //   } = this.props;
  //   this.state = { id };
  // }

  render() {
    // const { id } = this.state;
    // console.log(id);
    return <ExercisePresenter id={"dmsdf"} />;
  }
}

export default ExerciseContainer;
