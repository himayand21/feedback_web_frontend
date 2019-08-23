const removeRating = (state, skill) => {
  let store = { ...state };
  let _others = [...store._others];
  let _other_skills = [...store._other_skills];
  if (_other_skills.filter(element => element.value === skill).length > 0) {
    _other_skills = _other_skills.filter(element => element.value !== skill);
  }
  if (!_others.filter(element => element.value === skill).length > 0) {
    _others = [..._others, { value: skill, label: skill }];
  }
  let others = [...store.others, skill];
  let rating = { ...store.rating };
  delete rating[skill];
  store = { ...store, others, rating, _others, _other_skills };
  return store;
};
export default removeRating;
