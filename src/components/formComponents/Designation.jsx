import React from "react";
import Select from "react-select";
const Designation = props => {
  return (
    <div className="form-group">
      <label className="form-headers">APPLYING FOR</label>
      <br />
      <Select
        isSearchable={true}
        closeMenuOnScroll={true}
        name="_applying_for"
        options={props.options}
        placeholder="enter desired position"
        value={props.applyingFor}
        onChange={props.handleDesignationChange}
      />
      <br />
      <br />
    </div>
  );
};

export default Designation;
