import React from "react";
const Status = props => {
  return (
    <div className="form-group">
      <label className="form-headers" style={{ marginRight: 30 }}>
        STATUS:
      </label>
      <span onChange={props.getStatus}>
        <label className="radio-inline">
          <input type="radio" name="status" value="Rejected" required />
          Rejected
        </label>
        <label className="radio-inline">
          <input type="radio" name="status" value="On hold" />
          On hold
        </label>
        <label className="radio-inline">
          <input type="radio" name="status" value="Selected" />
          Selected
        </label>{" "}
      </span>
      <hr />
    </div>
  );
};

export default Status;
