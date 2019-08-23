import React, { Component } from "react";
import UserLogin from "./widgetComponents/UserLogin";
import UserHome from "./homeComponents/UserHome";
import SignUp from "./widgetComponents/SignUp";
import Team from "./widgetComponents/teamComponents/Team";
import { Redirect, BrowserRouter as Router, Route } from "react-router-dom";
import Intro from "./Intro";
import verifyUserCreds from "../api/verifyUserCreds";
import SpinnerComponent from "./SpinnerComponent";
import ForgotPassword from "./widgetComponents/forgotPassword/ForgotPassword";
import AboutUs from "./AboutUs";
import Links from "./Links";
import { resetState, updateState, submitAndVerify, hydrateStateWithLocal } from "../actions/user";
import { connect } from "react-redux";

class Home extends Component {
  state = {
    spinner: false,
    message: ""
  };
  reset = () => {
    this.props.resetState();
  };

  componentDidMount() {
    this.props.hydrateStateWithLocal();
  }

  updateState = e => {
    this.props.updateState([e.currentTarget.name], e.currentTarget.value);
  };
  submit = (e, store) => {
    e.preventDefault();
    this.setState({ spinner: true });
    verifyUserCreds(store.name, store.email, store.password).then(details => {
      if (details.message === "auth approved") {
        if (details.user[0].authorized === true) {
          this.props.submitAndVerify(details);
        }
        if (details.user[0].authorized === false) {
          this.setState({ message: "Awaiting for approval" });
        }
      } else this.setState({ message: "Invalid Credentials" });
      this.setState({ spinner: false });
    });
  };
  render() {
    const { store } = this.props;
    return (
      <div>
        {this.state.spinner ? <SpinnerComponent /> : null}
        <Router>
          <div>
            <Route
              path="/home"
              exact
              render={() => {
                return (
                  <div>
                    <UserHome loginPage={this.reset} />
                  </div>
                );
              }}
            />
            <Route
              path="/"
              exact
              render={() => {
                return <Redirect to="/login" />;
              }}
            />
            <Route
              path="/login"
              exact
              render={() => {
                return (
                  <div className="content-container">
                    <Links link="login" />
                    <div className="main-content">
                      <Intro heading="Log In" />
                      <UserLogin
                        message={this.state.message}
                        name={store.userData.name}
                        email={store.userData.email}
                        password={store.userData.password}
                        updateState={this.updateState}
                        submit={e => this.submit(e, store.userData)}
                      />
                    </div>
                    <div className="about-us">
                      <AboutUs />
                    </div>
                  </div>
                );
              }}
            />
            <Route
              path="/request"
              render={() => {
                return (
                  <div className="content-container">
                    <Links link="request" />
                    <div className="main-content">
                      <Intro heading="Send Request" />
                      <SignUp />
                    </div>
                    <div className="about-us">
                      <AboutUs />
                    </div>
                  </div>
                );
              }}
            />
            <Route
              path="/team"
              render={() => {
                return (
                  <div className="content-container">
                    <Links link="team" />
                    <div className="main-content">
                      <Intro heading="Create your Panel" />
                      <Team updateTeamFlag={false} />
                    </div>
                    <div className="about-us">
                      <AboutUs />
                    </div>
                  </div>
                );
              }}
            />
            <Route
              path="/forgot"
              render={() => {
                return (
                  <div className="content-container">
                    <Links link="login" />
                    <div className="main-content">
                      <Intro heading="Change Password" />
                      <ForgotPassword />
                    </div>
                    <div className="about-us">
                      <AboutUs />
                    </div>
                  </div>
                );
              }}
            />
            {store.userData.authorized ? (
              <Redirect to="/home" />
            ) : (
                <Redirect to="/login" />
              )}
          </div>
        </Router>
      </div>
    );
  }
}
function mapStatetoProps(state) {
  return {
    store: state
  };
}
export default connect(
  mapStatetoProps,
  { resetState, updateState, submitAndVerify, hydrateStateWithLocal }
)(Home);
