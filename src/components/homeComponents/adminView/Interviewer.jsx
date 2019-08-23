import React from "react";
import ReactTooltip from "react-tooltip";

const Interviewer = props => {
  return (
    <div>
      <div className="requests">
        <div className="request">
          <div className="int-name">
            <button
              data-tip={"Show " + props.data.name + "'s feedbacks."}
              value={props.data._id}
              onClick={props.updateData}
              className="show-button"
            >
              <i
                className="fas fa-angle-double-left"
                id={
                  props.data._id === props.activeUser
                    ? "active-button"
                    : "inactive-button"
                }
              />
            </button>
            {props.data.name}
          </div>
        </div>
        <div className="request email">{props.data.email}</div>
        <div className="request buttons">
          {props.data.admin ? (
            <button
              data-tip={props.data.name + " is an admin."}
              value={props.data._id}
              name={props.index}
              className="approve admin-button"
              disabled
            >
              <i className="fas fa-key" />
            </button>
          ) : (
            <button
              data-tip={"Make " + props.data.name + " admin."}
              value={props.data._id}
              name={props.index}
              className="approve"
              onClick={props.updateInterviewers}
            >
              <i className="fas fa-lock" />
            </button>
          )}
        </div>
        <div className="request buttons no-border">
          <button
            data-tip={
              props.data.admin
                ? "Cannot remove an admin."
                : "Remove " + props.data.name + "."
            }
            disabled={props.data.admin}
            value={props.data._id}
            name={props.index}
            className="approve decline"
            id="interviewers"
            onClick={props.userRemove}
          >
            {props.data.admin ? (
              <i class="fas fa-ban" />
            ) : (
              <i class="fas fa-minus-circle" />
            )}
          </button>
        </div>
      </div>
      <ReactTooltip />
    </div>
  );
};

export default Interviewer;
