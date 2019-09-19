import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import SharedComponent from "./shared.jsx";
import AboutMe from "./aboutme.jsx";

const descriptionStyle = {
  marginTop: "20px"
};
const dateStyle1 = {
  fontSize: "15px",
  float: "left",
  fontFamily: ["Liberation Sans Oblique", "Free Sans Oblique"]
};
const dateStyle2 = {
  fontSize: "15px",
  float: "right",
  fontFamily: ["Liberation Sans Oblique", "Free Sans Oblique"]
};
class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disableButtons: false
    };
  }
  render() {
    return (
      <div className="container">
        <SharedComponent history={this.props.history}></SharedComponent>
        <div>
          <AboutMe></AboutMe>
          <div style={descriptionStyle}>
            This page is deployed on AWS EC2 instance using docker. The site is
            still under construction. More contents to be added in the future.
          </div>
          <div style={{ marginTop: "50px" }}>
            <div style={dateStyle1}>
              This page was created on: <i>9/17/2019</i>
            </div>
            <div style={dateStyle2}>
              Last updated on: <i>9/19/2019</i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {};
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomeComponent)
);
