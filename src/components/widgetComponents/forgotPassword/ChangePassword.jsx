import React, { Component } from "react";
import updateUser from "../../../api/updateUser";
import NotificationModal from "../../NotificationModal";
import SpinnerComponent from "../../SpinnerComponent";
import { Redirect } from "react-router-dom";

class ChangePassword extends Component {
  state = {
    password1: "",
    password2: "",
    show: "",
    spinner: false
  };
  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };
  updateState = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };
  submit = e => {
    this.setState({ spinner: true });
    e.preventDefault();
    let user = { ...this.props.user, password: this.state.password1 };
    updateUser(user._id, user).then(response => {
      if (response.message === "Done") {
        this.setState({ spinner: false });
        this.handleShow();
      }
    });
  };
  render() {
    return (
      <div>
        {this.state.spinner ? <SpinnerComponent /> : null}
        <div className="proceed-box">
          <div className="form-group">
            <div className="image">
              <i className="fas fa-user-edit" />
            </div>
          </div>
          <form onSubmit={this.submit}>
            <div className="form-group">
              <label className="form-headers">PASSWORD</label>
              <input
                required
                name="password1"
                type="password"
                placeholder="enter new password"
                className="form-control"
                value={this.state.password1}
                onChange={this.updateState}
              />
              <br />
            </div>
            <div className="form-group">
              <label className="form-headers">CONFIRM PASSWORD</label>
              <input
                required
                name="password2"
                type="password"
                placeholder="confirm new password"
                className="form-control"
                value={this.props.password}
                onChange={this.updateState}
              />
            </div>
            {this.state.password1 !== this.state.password2 ? (
              <div className="error">
                <small>Passwords don't match</small>
              </div>
            ) : null}

            <br />
            <input
              disabled={
                this.state.password1 !== this.state.password2 ||
                this.state.password1.length === 0
                  ? true
                  : false
              }
              type="submit"
              className="proceed-button"
              value="Change Password"
            />
          </form>
          <NotificationModal
            show={this.state.show}
            handleClose={this.handleClose}
            title="Congratulations"
            header={"Your Password has been updated!"}
            content="You can now login to your account using your new password."
            note="Never share your password with anybody as it may cause in information falling into wrong hands. It's always better to be safe than sorry."
          />
          {this.state.show === false ? <Redirect to="/login" /> : null}
        </div>
      </div>
    );
  }
}

export default ChangePassword;
