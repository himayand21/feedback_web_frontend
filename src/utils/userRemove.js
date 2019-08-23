import removeUser from "../api/removeUser";
const userRemove = (state, id, index, category) => {
  let store = { ...state };
  let directory = [];
  if (category === "interviewers") directory = [...state.interviewers];
  else if (category === "requests") directory = [...state.requests];
  directory.splice(index, 1);
  removeUser(id);
  store = {
    ...state,
    [category]: directory
  };
  return store;
};
export default userRemove;
