import React, { Component } from "react";
import checkDuplicateTeam from "../../../api/checkDuplicateTeam";
import submitRequest from "../../../api/submitRequest";
import createTeam from "../../../api/createTeam";
import checkDuplicateName from "../../../api/checkDuplicateName";
import updateFeedbackPattern from "../../../api/updateFeedbackPattern";
import getFeedbackPattern from "../../../api/getFeedbackPattern";
import NotificationModal from "../../NotificationModal";
import SpinnerComponent from "../../SpinnerComponent";
import SignUpComponents from "../SignUpComponents";
import { connect } from "react-redux";
import TeamConfig from "./TeamConfig";
import { resetTeam, configureTeam } from "../../../actions/team";

class Team extends Component {
  state = {
    show: false,
    spinner: false,
    nameError: false,
    teamNameError: false,
    oldName: ""
  };

  componentDidMount() {
    this.props.resetTeam();
    if (this.props.updateTeamFlag) {
      let { store } = this.props;
      getFeedbackPattern(store.userData.teamId).then(res => {
        this.setState({
          oldName: res.teamName
        });
        let payload = { data: res.designations, teamName: res.teamName };
        return payload
      }).then(payload => {
        this.props.configureTeam(payload);
      });
    }

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

  search = name => {
    checkDuplicateName(name).then(res => {
      if (res.message === "found") {
        this.setState({ nameError: true });
      } else {
        this.setState({ nameError: false });
      }
    });
  };

  teamSearch = teamName => {
    if (teamName === this.state.oldName)
      this.setState({ teamNameError: false })
    else {
      checkDuplicateTeam(teamName).then(res => {
        if (res.message === "found") {
          this.setState({ teamNameError: true });
        } else {
          this.setState({ teamNameError: false });
        }
      });
    }
  };

  submit = e => {
    const { store } = this.props;
    this.setState({ spinner: true });
    e.preventDefault();
    let data = {
      designations: store.team.data,
      teamName: store.team.teamName
    };
    if (this.props.updateTeamFlag) {
      updateFeedbackPattern(store.userData.teamId, data).then(response => {
        if (response.message === "done") {
          this.setState({ spinner: false, oldName: "" });

          this.handleShow();
        }
      });
    }
    else {
      createTeam(data)
        .then(response => {
          return response.team._id;
        })
        .then(id => {
          const user = {
            name: store.signUp.name,
            email: store.signUp.email,
            password: store.signUp.password,
            authorized: true,
            admin: true,
            teamId: id,
            question: store.signUp.selectedOption.value,
            answer: store.signUp.answer.toUpperCase()
          };
          return user;
        })
        .then(user => {
          submitRequest(user).then(response => {
            this.props.resetTeam();
            if (response.message === "done") {
              this.setState({ spinner: false });
              this.handleShow();
            }
          });
        });
    }
  };

  render() {
    const { store } = this.props;
    return (
      <div>
        {this.state.spinner ? <SpinnerComponent /> : null}
        <div className={this.props.updateTeamFlag ? "admin-feedback" : null}>
          <div className="proceed-box">
            <div className="form-group">
              <div className="image">
                <i className={this.props.updateTeamFlag ? "fas fa-users-cog" : "fas fa-users"} />
              </div>
            </div>
            <form onSubmit={this.submit}>
              {this.props.updateTeamFlag ? null :
                <div>
                  <SignUpComponents
                    search={this.search}
                    nameError={this.state.nameError}
                  />
                  <hr /></div>}
              <TeamConfig
                teamNameError={this.state.teamNameError}
                teamSearch={this.teamSearch}
              />
              <input
                disabled={
                  this.props.updateTeamFlag ?
                    this.state.teamNameError ||
                      this.state.nameError
                      ? true
                      : false
                    :
                    store.signUp.selectedOption.length === 0 ||
                      Object.keys(store.team.data).length === 0 ||
                      this.state.teamNameError ||
                      this.state.nameError
                      ? true
                      : false
                }
                type="submit"
                className="proceed-button"
                value={this.props.updateTeamFlag ? "Update Team" : "Create Team"}
              />

            </form>
          </div>
          <NotificationModal
            show={this.state.show}
            handleClose={this.handleClose}
            title="Congratulations"
            header={this.props.updateTeamFlag ? "Your Team '" + store.team.teamName + "' has been updated ! " : "Your Team '" + store.team.teamName + "' is Live!"}
            content={this.props.updateTeamFlag ? "" : "Go to the login page and put the same credentials there to access your own feedback page."}
            note="Accept Request from people you know- else your information might fall into wrong hands."
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
  { resetTeam, configureTeam }
)(Team);
