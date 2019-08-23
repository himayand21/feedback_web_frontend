import loadData from "./loadData";
const updateInterviewerData = (state, details) => {
  let store = { ...state };
  let data = [];
  details.feedback.map(candidate => {
    let each = {};
    loadData(each, candidate);
    data.push(each);
  });
  store = { ...state, data };
  return store;
};
export default updateInterviewerData;
