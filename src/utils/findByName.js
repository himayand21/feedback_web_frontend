const findByName = (state, names) => {
  let store = { ...state };
  let data = [];
  if (state.old_data.length === 0) data = [...state.data];
  else data = [...state.old_data];
  let new_data = [];
  names.map(name => {
    new_data = new_data.concat(
      data.filter(candidate => candidate.name === name.value)
    );
  });
  store = {
    ...state,
    data: new_data,
    old_data: data,
    searchBar: {
      designation: "",
      status: ""
    }
  };
  return store;
};
export default findByName;
