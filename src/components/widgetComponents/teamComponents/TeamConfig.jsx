import React from "react";
import Skills from "./Skills";
import { connect } from "react-redux";
import {
  changeTeamName,
  editDesgn,
  editDesignation,
  removeDesgn,
  removeSkill,
  addDesignation,
  addSkills,
  editSkill,
  updateDesignation
} from "../../../actions/team";

const edit_desgn = (e, props) => {
  e.preventDefault();
  document.getElementById("focus").focus();
  props.editDesgn(e.currentTarget.value);
};

const edit_designation = (e, props) => {
  e.preventDefault();
  document.getElementById("focus").blur();
  props.editDesignation();
};

const edit_skill = (designation, new_skill, old_skill_index, props) => {
  document.getElementById(designation).blur();
  props.editSkill(designation, new_skill, old_skill_index);
};

const remove_desgn = (e, props) => {
  e.preventDefault();
  props.removeDesgn(e.currentTarget.value);
};

const remove_skill = (e, props) => {
  e.preventDefault();
  props.removeSkill(e.currentTarget.name, e.currentTarget.value);
};

const add_designation = (e, props) => {
  e.preventDefault();
  props.addDesignation();
};

const TeamConfig = props => {
  let { store } = props;
  return (
    <div>
      <div className="form-group">
        <label className="form-headers">TEAMNAME:</label>
        <input
          required
          name="teamName"
          type="text"
          placeholder="create your team name"
          className="form-control"
          onBlur={props.teamSearch(store.team.teamName)}
          value={store.team.teamName}
          onChange={e => props.changeTeamName(e.target.value)}
        />
        <div className={props.teamNameError ? "error" : "hidden"}>
          <small>Team name already exists</small>
        </div>
        <br />
      </div>

      <div className="form-group desgn-input-block">
        <label className="form-headers">DESIGNATION:</label>
        <br />
        <input
          id="focus"
          name="designation"
          type="text"
          placeholder="add designations here"
          className="form-control desgn"
          value={store.team.designation}
          onChange={e => props.updateDesignation(e.currentTarget.value)}
        />

        {store.team.editMode ? (
          <button
            className="proceed-button add-desgn"
            onClick={e => edit_designation(e, props)}
          >
            Confirm
          </button>
        ) : (
            <button
              className="proceed-button add-desgn"
              onClick={e => add_designation(e, props)}
            >
              Add
          </button>
          )}
        <div className={store.team.desgnError ? "error" : "hidden"}>
          <small>designation already exists</small>
        </div>
      </div>

      <div className="desgn-block">
        {Object.keys(store.team.data).map(designation => (
          <Skills
            key={designation}
            editDesgn={e => edit_desgn(e, props)}
            editSkill={(designation, new_skill, old_skill_index) =>
              edit_skill(designation, new_skill, old_skill_index, props)
            }
            removeDesgn={e => remove_desgn(e, props)}
            removeSkill={e => remove_skill(e, props)}
            data={store.team.data}
            designation={designation}
            addSkills={props.addSkills}
          />
        ))}
      </div>
    </div>
  );
};

function mapStatetoProps(state) {
  return {
    store: state
  };
}
export default connect(
  mapStatetoProps,
  {
    changeTeamName,
    editDesgn,
    editDesignation,
    removeDesgn,
    removeSkill,
    addDesignation,
    addSkills,
    editSkill,
    updateDesignation
  }
)(TeamConfig);
