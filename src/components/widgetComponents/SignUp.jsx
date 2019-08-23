import React, { Component } from "react";
import NotificationModal from "../NotificationModal";
import submitRequest from "../../api/submitRequest";
import SpinnerComponent from "../SpinnerComponent";
import { connect } from "react-redux";
import SignUpComponents from "./SignUpComponents";
import { getTeamNames, resetSignUp } from "../../actions/signup";
import checkDuplicateName from "../../api/checkDuplicateName";

class SignUp extends Component {
  state = {
    show: false,
    spinner: false,
    nameError: false
  };

  componentDidMount() {
    this.props.getTeamNames();
  }

  search = name => {
    checkDuplicateName(name).then(res => {
      if (res.message === "found") {
        this.setState({ nameError: true });
      } else {
        this.setState({ nameError: false });
      }
    });
  };

  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };

  submit = (e, store) => {
    console.log(store);
    this.setState({ spinner: true });
    e.preventDefault();
    const data = {
      name: store.name,
      email: store.email,
      password: store.password,
      authorized: false,
      admin: false,
      teamId: store.team,
      question: store.selectedOption.value,
      answer: store.answer.toUpperCase()
    };
    submitRequest(data).then(response => {
      if (response.message === "done") {
        this.setState({ spinner: false });
        this.handleShow();
        this.props.resetSignUp();
      }
    });
  };
  render() {
    let { store } = this.props;
    return (
      <div>
        {this.state.spinner ? <SpinnerComponent /> : null}
        <div className="proceed-box">
          <div className="form-group">
            <div className="image">
              <i className="fas fa-user-plus" />
            </div>
          </div>
          <form onSubmit={e => this.submit(e, store.signUp)}>
            <SignUpComponents
              search={this.search}
              nameError={this.state.nameError}
              signUp={true}
            />
          </form>
          <NotificationModal
            show={this.state.show}
            handleClose={this.handleClose}
            title="Done"
            header="Your Request is with our admins now"
            content="Once our admins approve your request, you will be able to login."
            note="Do note down the credentials somewhere."
          />
        </div>
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
  { getTeamNames, resetSignUp }
)(SignUp);
