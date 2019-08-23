import React from "react";
import Select from "react-select";
const OtherSkills = props => {
  return (
    <div className="form-group">
      <label className="form-headers">OTHER SKILLS</label>
      <br />
      <Select
        isMulti={true}
        name="_others"
        options={props.otherOptions}
        placeholder="add skills"
        value={props.otherSkills}
        onChange={props.handleSkillChange}
      />
      <br />
      <br />
    </div>
  );
};

export default OtherSkills;
