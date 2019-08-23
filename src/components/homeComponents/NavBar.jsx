import React from "react";
import ReactTooltip from "react-tooltip";

const NavBar = props => {
  return (
    <div>
      <div className="nav-container">
        <div className="icon">
          <div className="icon-name">Feedback </div>
          <i className="fa fa-bullhorn" aria-hidden="true" />
        </div>
        {props.admin ? (
          <button
            className="NavBar admin"
            id={props.widget === "admin" ? "active" : "inactive"}
            value="admin"
            onClick={props.updateState}
          >
            Admin Space
          </button>
        ) : (
          <button
            className="NavBar"
            id={props.widget === "view" ? "active" : "inactive"}
            value="view"
            onClick={props.updateState}
          >
            My Feedbacks
          </button>
        )}

        <button
          className="NavBar"
          id={props.widget === "form" ? "active" : "inactive"}
          value="form"
          onClick={props.updateState}
        >
          Provide Feedbacks
        </button>
        <button
          data-tip="Logout"
          className="NavBar Logout"
          onClick={props.loginPage}
        >
          <i className="fas fa-sign-out-alt" />
        </button>
      </div>
      <ReactTooltip />
    </div>
  );
};

export default NavBar;
