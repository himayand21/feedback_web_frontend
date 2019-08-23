import React, { Component } from "react";

import Select from "react-select";

import { SECURITY_Q } from "../../constants";

import { connect } from "react-redux";
import {
  updateStateSignUp,
  handleTeamChange,
  selectQuestion
} from "../../actions/signup";

class SignUpComponents extends Component {
  render() {
    let { store } = this.props;
    return (
      <div>
        <div className="form-group">
          <label className="form-headers">USERNAME</label>
          <input
            required
            className="form-control"
            name="name"
            type="text"
            placeholder="enter unique username"
            value={store.signUp.name}
            onChange={e =>
              this.props.updateStateSignUp(
                e.currentTarget.name,
                e.currentTarget.value
              )
            }
            onBlur={this.props.search(store.signUp.name)}
          />
          <div
            className={
              this.props.nameError && store.signUp.name.length > 0
                ? "error"
                : "hidden"
            }
          >
            <small>Username already exists</small>
          </div>
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
            value={store.signUp.email}
            onChange={e =>
              this.props.updateStateSignUp(
                e.currentTarget.name,
                e.currentTarget.value
              )
            }
          />
          <br />
        </div>
        <div className="form-group">
          <label className="form-headers">PASSWORD</label>
          <input
            required
            name="password"
            type="password"
            placeholder="enter password (remember this)"
            className="form-control"
            value={store.signUp.password}
            onChange={e =>
              this.props.updateStateSignUp(
                e.currentTarget.name,
                e.currentTarget.value
              )
            }
          />
          <br />
        </div>
        <div className="form-group">
          <label className="form-headers">SECURITY QUESTION</label>
          <br />
          <Select
            required
            closeMenuOnScroll={true}
            options={SECURITY_Q}
            placeholder="choose your security question"
            value={store.signUp.selectedOption}
            onChange={selectedOption =>
              this.props.selectQuestion(selectedOption)
            }
          />
          <br />
        </div>
        <div className="form-group">
          <label className="form-headers">ANSWER</label>
          <input
            required
            name="answer"
            type="text"
            placeholder="enter security answer (not more than 1 word)"
            className="form-control"
            value={store.signUp.answer}
            onChange={e =>
              this.props.updateStateSignUp(
                e.currentTarget.name,
                e.currentTarget.value
              )
            }
          />
          <br />
        </div>
        {this.props.signUp ? (
          <div>
            <div className="form-group">
              <label className="form-headers">SELECT TEAM</label>
              <br />
              <Select
                required
                closeMenuOnScroll={true}
                name="team"
                options={store.signUp.teamNames}
                placeholder="enter approving team"
                value={store.signUp.teamSelect}
                onChange={teamSelect => this.props.handleTeamChange(teamSelect)}
              />
              <br />
            </div>
            <input
              disabled={
                store.signUp.teamSelect.length === 0 ||
                store.signUp.selectedOption.length === 0 ||
                this.props.nameError === true
              }
              type="submit"
              className="proceed-button"
              value="Send Request"
            />
          </div>
        ) : null}
      </div>
    );
  }
}
function mapStatetoProps(state) {
  return {
    store: state
  };
}
export default connect(
  mapStatetoProps,
  {
    updateStateSignUp,
    handleTeamChange,
    selectQuestion
  }
)(SignUpComponents);
