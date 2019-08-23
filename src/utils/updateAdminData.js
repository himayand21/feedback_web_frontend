import loadData from "./loadData";
const updateAdminData = (state, details) => {
  let store = { ...state };
  let data = [];
  details.feedback.map(candidate => {
    let each = {};
    loadData(each, candidate);
    data.push(each);
    return null;
  });
  store = {
    ...state,
    data,
    searchBar: {
      designation: "",
      status: ""
    },
    searchColumn: {
      designation: [],
      status: []
    }
  };
  return store;
};
export default updateAdminData;
