const onDesignationChange = (state, _applying_for) => {
  let store = { ...state };
  let others = store.skills;
  let _others = store.skillOptions;
  let rating = {};
  store.skillmap[_applying_for.value].map(skill => {
    others = others.filter(element => element !== skill);
    _others = _others.filter(element => element.value !== skill);
    rating = { ...rating, [skill]: 1 };
    return null;
  });
  store = {
    ...store,
    _other_skills: "",
    _others,
    others,
    rating,
    applying_for: _applying_for.label,
    _applying_for
  };
  return store;
};
export default onDesignationChange;
