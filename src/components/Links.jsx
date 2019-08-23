import React from "react";
import { Link } from "react-router-dom";

const Links = props => {
  return (
    <div className="nav-container sticky">
      <div className="icon">
        <div className="icon-name">Feedback </div>
        <i className="fa fa-bullhorn" aria-hidden="true" />
      </div>
      <div className="menu">
        <div
          className="menu-item"
          id={props.link === "login" ? "active" : "inactive"}
        >
          <Link className="link-to" to="/login">
            Log In
          </Link>
        </div>
        <div
          className="menu-item"
          id={props.link === "request" ? "active" : "inactive"}
        >
          <Link className="link-to" to="/request">
            Send Request
          </Link>
        </div>
        <div
          className="menu-item"
          id={props.link === "team" ? "active" : "inactive"}
        >
          <Link className="link-to" to="/team">
            Create Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Links;
