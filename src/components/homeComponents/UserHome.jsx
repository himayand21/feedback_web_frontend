import React, { Component } from "react";
import ViewAll from "./ViewAll";
import Form from "./Form";
import NavBar from "./NavBar";
import Team from "../widgetComponents/teamComponents/Team";
import Requests from "./adminView/Requests";
import Tab from "./adminView/Tab";
import Interviewers from "./adminView/Interviewers";
import { Redirect, BrowserRouter as Router, Route } from "react-router-dom";
import getFeedbackByTeamId from "../../api/getFeedbackByTeamId";
import getInterviewerFeedbacks from "../../api/getInterviewerFeedbacks";
import SpinnerComponent from "../SpinnerComponent";
import { connect } from "react-redux";
import {
  updateAdminData,
  updateInterviewerData,
  updateData,
  updateSearchBar,
  getRequestsAndPanel
} from "../../actions/user";
import { updateForm } from "../../actions/form";

class UserHome extends Component {
  state = {
    activeUser: "",
    widget: "form",
    tab: "requests",
    showConfig: false,
    spinner: false
  };

  componentDidMount() {
    this.updateForm();
  }

  updateInterviewerData = () => {
    const { store } = this.props;
    this.setState({ spinner: true });
    getInterviewerFeedbacks(store.userData.userId)
      .then(details => {
        this.setState({ spinner: false });
        this.props.updateInterviewerData(details);
      })
      .then(() => this.props.updateSearchBar());
  };

  updateAdminData = () => {
    const { store } = this.props;
    this.setState({ spinner: true });
    getFeedbackByTeamId(store.userData.teamId)
      .then(details => {
        this.setState({ spinner: false, activeUser: "" });
        this.props.updateAdminData(details);
      })
      .then(() => {
        this.props.updateSearchBar();
      });
    this.props.getRequestsAndPanel(store.userData.teamId);
  };

  updateForm = () => {
    const { store } = this.props;
    this.props.updateForm(store.userData.teamId);
  };

  updateData = e => {
    let activeUser = e.currentTarget.value;
    this.setState({ spinner: true });
    getInterviewerFeedbacks(activeUser)
      .then(details => {
        this.props.updateData(details);
        this.setState({
          spinner: false,
          activeUser
        });
      })
      .then(() => this.props.updateSearchBar());
  };

  updateState = e => {
    if (e.currentTarget.value === "admin") {
      this.updateAdminData();
    } else if (e.currentTarget.value === "view") {
      this.updateInterviewerData();
    } else if (e.currentTarget.value === "form") {
      this.updateForm();
    }
    this.setState({ widget: e.currentTarget.value });
    localStorage.setItem("widget", e.currentTarget.value);
  };

  updateTab = (e, teamId) => {
    this.props.getRequestsAndPanel(teamId);
    this.setState({ tab: e.currentTarget.value });
  };

  showConfig = () => {
    this.setState({ showConfig: !this.state.showConfig });
    this.updateAdminData();
  };
  refresh = () => {
    if (this.state.widget === "admin") this.updateAdminData();
    else this.updateInterviewerData();
  };
  renderSwitch() {
    switch (this.state.widget) {
      case "view":
        return <Redirect to="/interviewer" />;
      case "form":
        return <Redirect to="/form" />;
      case "admin":
        return <Redirect to="/admin" />;
      default:
        return <div>Error</div>;
    }
  }
  render() {
    const { store } = this.props;
    return (
      <div>
        {this.state.spinner ? <SpinnerComponent /> : null}
        <NavBar
          loginPage={this.props.loginPage}
          admin={store.userData.admin}
          updateState={this.updateState}
          widget={this.state.widget}
        />
        <Router>
          <div>
            <Route
              path="/admin"
              exact
              render={() => {
                return (
                  <div>
                    <div className="request-container">
                      <Tab
                        requests={store.userData.requests.length}
                        interviewers={store.userData.interviewers.length}
                        tab={this.state.tab}
                        updateTab={e =>
                          this.updateTab(e, store.userData.teamId)
                        }
                      />
                      {this.state.tab === "requests" ? (
                        <Requests updateRequest={this.updateRequest} />
                      ) : (
                          <Interviewers
                            refresh={this.refresh}
                            activeUser={this.state.activeUser}
                            updateData={this.updateData}
                          />
                        )}
                      <div className="configuration">
                        <button
                          className="proceed-button"
                          onClick={this.showConfig}
                        >
                          {this.state.showConfig
                            ? "Show All Feedbacks"
                            : "Configure Feedback Pattern"}
                        </button>
                      </div>
                    </div>
                    {this.state.showConfig ? (
                      <Team updateTeamFlag={true} />
                    ) : (
                        <div className="admin-feedback">
                          <ViewAll refresh={this.refresh} />
                        </div>
                      )}
                  </div>
                );
              }}
            />
            <Route
              path="/interviewer"
              exact
              render={() => {
                return <ViewAll name={store.userData.name} />;
              }}
            />
            <Route
              path="/form"
              exact
              render={() => {
                return (
                  <div>
                    <Form />
                  </div>
                );
              }}
            />
            {this.renderSwitch()}
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
  {
    updateAdminData,
    updateInterviewerData,
    updateData,
    updateSearchBar,
    getRequestsAndPanel,
    updateForm
  }
)(UserHome);
