import React from "react";
const Tab = props => {
  return (
    <div>
      <button
        value="requests"
        onClick={props.updateTab}
        className="tab"
        id={props.tab === "requests" ? "tab-active" : "inactive"}
      >
        Requests <p className="badge">{props.requests}</p>
      </button>
      <button
        value="interviewers"
        onClick={props.updateTab}
        className="tab"
        id={props.tab === "interviewers" ? "tab-active" : "inactive"}
      >
        Panel <p className="badge">{props.interviewers}</p>
      </button>
    </div>
  );
};

export default Tab;
