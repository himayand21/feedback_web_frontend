import React from "react";
const Skill = props => {
  return (
    <div className="skill-column">
      <div className="skill-name">{props.skill}</div>
      <button
        className="skill-remove-button skill-edit-button"
        id={props.index}
        value={props.skill}
        name={props.designation}
        onClick={props.editSkill}
      >
        <i class="fas fa-pencil-alt" />
      </button>
      <button
        className="skill-remove-button"
        value={props.index}
        name={props.designation}
        onClick={props.removeSkill}
      >
        ×
      </button>
    </div>
  );
};

export default Skill;
