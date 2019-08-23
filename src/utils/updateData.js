import loadData from "./loadData";

const updateData = (state, details) => {
  let store = { ...state };
  let data = [];
  details.feedback.map(candidate => {
    let each = {};
    loadData(each, candidate);
    data.push(each);
    return null;
  });
  store = { ...state, data, selectedOption: [] };
  return store;
};
export default updateData;
