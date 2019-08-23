import React from "react";
import DatePicker from "react-datepicker";
const InterviewDate = props => {
  return (
    <div className="form-group">
      <label className="form-headers">DATE</label>
      <br />
      <DatePicker
        className="form-control datepicker"
        name="date"
        maxDate={new Date()}
        selected={props.date}
        onChange={props.handleDateChange}
      />
      <br />
      <br />
    </div>
  );
};

export default InterviewDate;
