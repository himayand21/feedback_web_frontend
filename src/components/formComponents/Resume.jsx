import React from "react";
const Resume = props => {
  return (
    <div>
      <div className="form-group">
        <label className="form-headers">UPLOAD RESUME</label>
        <br />
        <div className="form-control-file">
          <input
            required
            name="myImage"
            onChange={props.uploadFile}
            type="file"
            accept=".pdf"
          />
        </div>
        <br />
      </div>
    </div>
  );
};

export default Resume;
