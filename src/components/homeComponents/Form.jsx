import React, { Component } from "react";
import Greetings from "../formComponents/Greetings";
import ApplicantName from "../formComponents/ApplicantName";
import InterviewDate from "../formComponents/InterviewDate";
import Work from "../formComponents/Work";
import Designation from "../formComponents/Designation";
import Ratings from "../formComponents/Ratings";
import Comments from "../formComponents/Comments";
import Status from "../formComponents/Status";
import Resume from "../formComponents/Resume";
import NotificationModal from "../NotificationModal";
import uploadResume from "../../api/uploadResume";
import postFeedback from "../../api/postFeedback";
import SpinnerComponent from "../SpinnerComponent";
import { connect } from "react-redux";
import {
  resetForm,
  getStatus,
  handleDateChange,
  updateFormState,
  onStarClick,
  handleDesignationChange,
  removeRating,
  handleSkillChange
} from "../../actions/form";

class Form extends Component {
  state = {
    formData: "",
    show: false,
    disable: false,
    spinner: false
  };
  componentDidMount() {
    this.disable();
  }
  reset = () => {
    this.props.resetForm();
    this.setState({
      formData: "",
      show: false,
      disable: false,
      spinner: false
    });
  };
  check = () => {
    let { store } = this.props;
    if (store.form.applying_for.length === 0) {
      this.disable();
    } else {
      this.enable();
    }
  };
  handleClose = () => {
    this.setState({ show: false });
    this.reset();
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  handleDesignationChange = _applying_for => {
    this.check();
    this.props.handleDesignationChange(_applying_for);
  };

  removeRating = skill => {
    this.props.removeRating(skill);
  };

  handleSkillChange = _other_skills => {
    this.check();
    this.props.handleSkillChange(_other_skills);
  };
  uploadFile = e => {
    let formData = new FormData();
    formData.append("resume", e.target.files[0]);
    this.setState({ formData });
  };
  submitForm = e => {
    let { store } = this.props;
    this.setState({ spinner: true });
    e.preventDefault();
    let data = {
      interviewer_name: store.userData.name,
      interviewer_userId: store.userData.userId,
      team_id: store.userData.teamId,
      applicant_name: store.form.applicantName,
      interview_date: store.form.date,
      exp_year: store.form.exp_year,
      exp_month: store.form.exp_month,
      designation: store.form.applying_for,
      skills: store.form.rating,
      comments: store.form.comments,
      status: store.form.status,
      file: ""
    };
    uploadResume(this.state.formData)
      .then(res => {
        data.file = res.message;
        return data;
      })
      .then(data =>
        postFeedback(data).then(response => {
          if (response.message === "done") {
            this.setState({ spinner: false });
            this.handleShow();
          }
        })
      );
  };

  disable = () => {
    this.setState({ disable: true });
  };
  enable = () => {
    this.setState({ disable: false });
  };
  render() {
    let { store } = this.props;
    return (
      <div>
        {this.state.spinner ? <SpinnerComponent /> : null}
        <div className="feedback-form">Feedback Form </div>
        <div className="form-box">
          <div className="proceed-box">
            <form encType="multipart/form-data" onSubmit={this.submitForm}>
              <Greetings name={this.props.name} />

              <ApplicantName
                applicantName={store.form.applicantName}
                updateState={e =>
                  this.props.updateFormState(e.target.name, e.target.value)
                }
              />

              <InterviewDate
                date={store.form.date}
                handleDateChange={date => this.props.handleDateChange(date)}
              />
              <Work
                updateState={e =>
                  this.props.updateFormState(e.target.name, e.target.value)
                }
                month={store.form.exp_month}
                year={store.form.exp_year}
              />
              <Designation
                options={store.form.options}
                applyingFor={store.form._applying_for}
                handleDesignationChange={this.handleDesignationChange}
              />
              <Ratings
                rating={store.form.rating}
                applyingFor={store.form._applying_for}
                onStarClick={(nextValue, prevValue, name) =>
                  this.props.onStarClick(nextValue, name)
                }
                removeRating={this.removeRating}
                handleSkillChange={this.handleSkillChange}
                otherOptions={store.form._others}
                otherSkills={store.form._other_skills}
              />
              <Comments
                updateState={e =>
                  this.props.updateFormState(e.target.name, e.target.value)
                }
                comments={store.form.comments}
              />
              <Resume uploadFile={this.uploadFile} />
              <Status getStatus={e => this.props.getStatus(e.target.value)} />
              <div>
                <input
                  disabled={this.state.disable}
                  type="submit"
                  className="proceed-button"
                  value="Submit"
                />
              </div>
            </form>
            <NotificationModal
              show={this.state.show}
              handleClose={this.handleClose}
              title="Great!"
              header="Your Feedback has been recorded"
              content={
                "Your feedback for '" +
                store.form.applicantName +
                "' has been stored safely with us now."
              }
              note="Your team leader can see your feedback"
            />
          </div>
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
  {
    resetForm,
    getStatus,
    handleDateChange,
    updateFormState,
    onStarClick,
    handleDesignationChange,
    removeRating,
    handleSkillChange
  }
)(Form);
