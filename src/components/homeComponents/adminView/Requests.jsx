import React from "react";
import Request from "./Request";
import { connect } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import { removeUser, updateRequest } from "../../../actions/user";

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

const Requests = props => {
  const { store } = props;
  return (
    <div>
      <div className="requests heading">
        <div className="request heading">Name</div>
        <div className="request email heading">Email</div>
        <div className="request last-button">Action</div>
      </div>
      {store.userData.requests.length > 0 ? (
        <div>
          {store.userData.requests.map((data, index) => (
            <Request
              key={index}
              data={data}
              updateRequest={e =>
                props.updateRequest(e.currentTarget.value, e.currentTarget.name)
              }
              index={index}
              userRemove={e => userRemove(e, props)}
            />
          ))}
        </div>
      ) : (
          <div className="notice">
            <i class="fas fa-calendar-check sad-emoji" />
            <br />
            No pending requests.
        </div>
        )}
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
  { removeUser, updateRequest }
)(Requests);
