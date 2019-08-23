import React from "react";
const Work = props => {
  return (
    <div className="form-group">
      <label className="form-headers">WORK EXPERIENCE</label>
      <br />
      <input
        required
        className="form-control half"
        name="exp_year"
        type="number"
        placeholder="years"
        value={props.year}
        onChange={props.updateState}
        min="0"
        max="40"
      />
      <input
        required
        className="form-control"
        name="exp_month"
        type="number"
        placeholder="months"
        value={props.month}
        onChange={props.updateState}
        min="0"
        max="11"
      />
      <br />
      <br />
    </div>
  );
};

export default Work;
