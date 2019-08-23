const search = (state, index, value) => {
  let store = { ...state };
  let data = [];
  if (state.old_data.length === 0) data = [...state.data];
  else data = [...state.old_data];
  let new_data = data.filter(candidate => candidate[index] === value);
  let searchBar = {
    designation: "",
    status: ""
  };
  searchBar[index] = value;
  store = {
    ...state,
    data: new_data,
    old_data: data,
    searchBar
  };
  return store;
};
export default search;
