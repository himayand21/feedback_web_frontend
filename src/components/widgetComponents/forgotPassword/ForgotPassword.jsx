import React, { Component } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { SECURITY_Q } from "../../../constants";
import checkCredentials from "../../../api/checkCredentials";
import SpinnerComponent from "../../SpinnerComponent";
import ChangePassword from "./ChangePassword";
class ForgotPassword extends Component {
  state = {
    name: "",
    email: "",
    answer: "",
    selectedOption: [],
    spinner: false,
    auth: "",
    user: ""
  };
  updateState = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };
  submit = e => {
    e.preventDefault();
    this.setState({ spinner: true });
    checkCredentials(
      this.state.name,
      this.state.email,
      this.state.selectedOption.value,
      this.state.answer.toUpperCase()
    ).then(details => {
      this.setState({ spinner: false });
      if (details.message === "auth approved") {
        this.setState({ auth: true, user: details.user[0] });
      } else this.setState({ auth: false });
    });
  };
  render() {
    return (
      <div>
        {this.state.spinner ? <SpinnerComponent /> : null}
        {this.state.auth === true ? (
          <ChangePassword user={this.state.user} />
        ) : (
          <div className="proceed-box">
            <div className="form-group">
              <div className="image">
                <i className="fas fa-user-shield" />
              </div>
            </div>
            <form onSubmit={this.submit}>
              <div className="form-group">
                <label className="form-headers">USERNAME</label>
                <input
                  required
                  className="form-control"
                  name="name"
                  type="text"
                  placeholder="enter username"
                  value={this.state.name}
                  onChange={this.updateState}
                />
                <br />
              </div>
              <div className="form-group">
                <label className="form-headers">EMAIL</label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="enter your email"
                  className="form-control"
                  value={this.state.email}
                  onChange={this.updateState}
                />
                <br />
              </div>
              <div className="form-group">
                <label className="form-headers">SECURITY QUESTION</label>
                <br />
                <Select
                  closeMenuOnScroll={true}
                  options={SECURITY_Q}
                  placeholder="choose your security question"
                  value={this.state.selectedOption}
                  onChange={this.handleChange}
                />
                <br />
              </div>
              <div className="form-group">
                <label className="form-headers">ANSWER</label>
                <input
                  required
                  name="answer"
                  type="text"
                  placeholder="enter security answer"
                  className="form-control"
                  value={this.state.answer}
                  onChange={this.updateState}
                />
                {this.state.auth === false ? (
                  <div className="error">
                    <small>Invalid Credentials</small>
                  </div>
                ) : null}
                <br />
              </div>
              <input
                disabled={this.state.selectedOption.length === 0 ? true : false}
                type="submit"
                className="proceed-button"
                value="Proceed to Change Password"
              />
            </form>
            <div className="link">
              <Link className="link-item" to="/login">
                Back to Log in
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ForgotPassword;
