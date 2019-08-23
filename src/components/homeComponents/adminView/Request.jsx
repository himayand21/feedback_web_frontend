import React from "react";

const Request = props => {
  return (
    <div className="requests">
      <div className="request">{props.data.name}</div>
      <div className="request email">{props.data.email}</div>
      <div className="request buttons">
        <button
          data-tip={"Approve " + props.data.name + "'s request"}
          value={props.data._id}
          name={props.index}
          className="approve"
          onClick={props.updateRequest}
        >
          <i class="fas fa-plus-circle" />
        </button>
      </div>
      <div className="request buttons no-border">
        <button
          data-tip={"Decline " + props.data.name + "'s request"}
          value={props.data._id}
          name={props.index}
          className="approve decline"
          id="requests"
          onClick={props.userRemove}
        >
          <i class="fas fa-minus-circle" />
        </button>
      </div>
    </div>
  );
};

export default Request;
