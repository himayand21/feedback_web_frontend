import updateUser from "../api/updateUser";
const updateRequest = (state, id, index) => {
  let store = { ...state };
  let requests = [...state.requests];
  let data = requests[index];
  data.authorized = true;
  let interviewers = [...state.interviewers, data];
  requests.splice(index, 1);
  updateUser(id, data);
  store = {
    ...state,
    requests,
    interviewers
  };
  return store;
};
export default updateRequest;
