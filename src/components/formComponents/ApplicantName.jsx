import React, { Component } from "react";
import checkDuplicateApplicant from "../../api/checkDuplicateApplicant";
class ApplicantName extends Component {
  state = {
    nameError: false
  };
  search = e => {
    checkDuplicateApplicant(e.currentTarget.value).then(res => {
      if (res.message === "found") {
        this.setState({ nameError: true });
      } else {
        this.setState({ nameError: false });
      }
    });
  };
  render() {
    return (
      <div className="form-group">
        <label className="form-headers">APPLICANT NAME</label>
        <input
          autoFocus
          required
          className="form-control"
          name="applicantName"
          type="text"
          placeholder="enter applicant name"
          value={this.props.applicantName}
          onChange={this.props.updateState}
          onBlur={this.search}
        />
        <div className={this.state.nameError ? "error" : "hidden"}>
          <small>Name already exists</small>
        </div>
        <br />
      </div>
    );
  }
}

export default ApplicantName;
