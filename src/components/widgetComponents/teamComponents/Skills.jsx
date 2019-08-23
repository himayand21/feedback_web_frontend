import React, { Component } from "react";
import Skill from "./Skill";
class Skills extends Component {
  state = {
    skill: "",
    editMode: ""
  };
  updateState = this.updateState.bind(this);
  addSkills = this.addSkills.bind(this);
  editSkill = this.editSkill.bind(this);
  editSkills = this.editSkills.bind(this);
  editSkill(e) {
    e.preventDefault();
    document.getElementById(this.props.designation).focus();
    this.setState({ skill: [e.currentTarget.value] });
    this.setState({ editMode: [e.currentTarget.id] });
  }
  editSkills(e) {
    e.preventDefault();
    this.props.editSkill(
      e.currentTarget.name,
      e.currentTarget.value,
      this.state.editMode
    );
    this.setState({ editMode: "", skill: "" });
  }
  addSkills(e) {
    e.preventDefault();
    this.setState({ skill: "" });
    this.props.addSkills(e.currentTarget.name, e.currentTarget.value);
  }
  updateState(e) {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  }

  render() {
    return (
      <div>
        <div className="desgn-header">
          <div className="input-desgn">{this.props.designation}</div>
          <button
            className="skill-remove-button skill-edit-button"
            value={this.props.designation}
            onClick={this.props.editDesgn}
          >
            <i class="fas fa-pencil-alt" />
          </button>
          <button
            className="skill-remove-button"
            value={this.props.designation}
            onClick={this.props.removeDesgn}
          >
            ×
          </button>
        </div>
        <div className="form-group">
          <label className="form-headers">ADD SKILL:</label>
          <br />
          <input
            required={
              this.props.data[this.props.designation].length === 0
                ? true
                : false
            }
            id={this.props.designation}
            name="skill"
            type="text"
            placeholder="add required skills here"
            className="form-control desgn"
            value={this.state.skill}
            onChange={this.updateState}
          />
          {this.state.editMode ? (
            <button
              name={this.props.designation}
              className="proceed-button add-desgn"
              onClick={this.editSkills}
              value={this.state.skill}
            >
              Confirm
            </button>
          ) : (
            <button
              name={this.props.designation}
              className="proceed-button add-desgn"
              onClick={this.addSkills}
              value={this.state.skill}
            >
              Add Skill
            </button>
          )}
        </div>

        <div className="skill-list">
          {this.props.data[this.props.designation].map((skill, index) => (
            <Skill
              key={index}
              editSkill={this.editSkill}
              removeSkill={this.props.removeSkill}
              designation={this.props.designation}
              skill={skill}
              index={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Skills;
