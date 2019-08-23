import React from "react";
import { Link } from "react-router-dom";

const UserLogin = props => {
  return [
    <div className="proceed-box">
      <div className="form-group">
        <div className="image">
          <i className="fas fa-user" />
        </div>
      </div>
      <form onSubmit={props.submit}>
        <div className="form-group">
          <label className="form-headers">USERNAME</label>
          <input
            required
            className="form-control"
            name="name"
            type="text"
            placeholder="enter username"
            value={props.name}
            onChange={props.updateState}
          />
          <br />
        </div>
        <div className="form-group">
          <label className="form-headers">EMAIL</label>
          <input
            required
            name="email"
            type="email"
            placeholder="enter your email"
            className="form-control"
            value={props.email}
            onChange={props.updateState}
          />
          <br />
        </div>
        <div className="form-group">
          <label className="form-headers">PASSWORD</label>
          <input
            required
            name="password"
            type="password"
            placeholder="enter password"
            className="form-control"
            value={props.password}
            onChange={props.updateState}
          />

          <Link className="forgot-password" to="/forgot">
            Forgot Password?
          </Link>

          <br />
          <div className="error">
            <small>{props.message}</small>
          </div>
        </div>
        <input type="submit" className="proceed-button" value="Log In" />
      </form>
    </div>
  ];
};

export default UserLogin;
