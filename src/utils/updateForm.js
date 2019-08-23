const updateForm = (state, payload) => {
  let store = { ...state };
  store = {
    ...store,
    skillOptions: payload.skillOptions,
    skillmap: payload.skillmap,
    options: payload.options,
    skills: payload.skills
  };
  return store;
};
export default updateForm;
