const updateSearchBar = state => {
  let store = { ...state };
  let searchColumn = {
    designation: [],
    status: []
  };
  state.data.map(data => {
    if (!searchColumn.designation.includes(data.designation)) {
      searchColumn.designation.push(data.designation);
    }
    if (!searchColumn.status.includes(data.status)) {
      searchColumn.status.push(data.status);
    }
  });
  store = {
    ...state,
    old_data: [],
    searchBar: { designation: "", status: "" },
    searchColumn
  };
  return store;
};
export default updateSearchBar;
