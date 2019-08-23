import React from "react";
const Comments = props => {
  return (
    <div className="form-group">
      <label className="form-headers">COMMENTS</label>
      <textarea
        required
        rows={4}
        className="form-control"
        name="comments"
        placeholder="your comments on the candidate"
        value={props.comments}
        onChange={props.updateState}
      />
      <br />
    </div>
  );
};

export default Comments;
