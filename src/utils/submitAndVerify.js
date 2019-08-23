const submitAndVerify = (state, details) => {
  let store = { ...state };
  store = {
    ...state,
    userId: details.user[0]._id,
    teamId: details.user[0].teamId,
    authorized: true,
    admin: false
  };

  if (details.user[0].admin === true) {
    store = { ...store, admin: true };
  }
  for (let key in store) {
    let val = store[key];
    localStorage.setItem(key, val);
  }
  return store;
};
export default submitAndVerify;
