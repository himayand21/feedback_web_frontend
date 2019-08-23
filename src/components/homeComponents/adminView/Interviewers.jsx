import React from "react";
import Interviewer from "./Interviewer";
import { connect } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import { removeUser, updatePanel } from "../../../actions/user";

const updateInterviewers = e => {
  const id = e.currentTarget.value;
  const index = e.currentTarget.name;
  this.props.updatePanel(id, index);
};

const userRemove = (e, props) => {
  const index = e.currentTarget.name;
  const id = e.currentTarget.value;
  const category = e.currentTarget.id;
  confirmAlert({
    title: "Remove user",
    message: "Are you sure you want to remove this user?",
    buttons: [
      {
        label: "Yes",
        onClick: () => props.removeUser(id, index, category)
      },
      {
        label: "No",
        onClick: () => { }
      }
    ]
  });
};

const Interviewers = props => {
  const { store } = props;
  return (
    <div>
      <div className="requests heading">
        <div className="request heading">Name</div>
        <div className="request email heading">Email</div>
        <div className="request last-button">Action</div>
      </div>
      {store.userData.interviewers.map((data, index) => (
        <Interviewer
          key={index}
          activeUser={props.activeUser}
          updateData={props.updateData}
          data={data}
          updateInterviewers={updateInterviewers}
          index={index}
          userRemove={e => userRemove(e, props)}
        />
      ))}
    </div>
  );
};
function mapStatetoProps(state) {
  return {
    store: state
  };
}

export default connect(
  mapStatetoProps,
  { removeUser, updatePanel }
)(Interviewers);
