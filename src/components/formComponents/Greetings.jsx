import React from "react";
const Greetings = props => {
  return (
    <div className="greetings">
      {props.name} <i className="fas fa-user-alt" />
    </div>
  );
};

export default Greetings;
