import updateUser from "../api/updateUser";
const updatePanel = (state, id, index) => {
  let store = { ...state };
  let interviewers = [...state.interviewers];
  let data = interviewers[index];
  data.admin = true;
  updateUser(id, data);
  store = {
    ...state,
    interviewers
  };
  return store;
};
export default updatePanel;
