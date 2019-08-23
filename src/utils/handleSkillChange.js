const handleSkillChange = (state, _other_skills) => {
  let store = { ...state };
  let others = [...store.others];
  let rating = { ...store.rating };
  if (store._other_skills.length > _other_skills.length) {
    store._other_skills.map(skill => {
      if (!_other_skills.includes(skill)) {
        delete rating[skill.value];
        others = [...others, skill.value];
      }
      return null;
    });
  } else {
    _other_skills.map(skill => {
      others = others.filter(element => element !== skill.value);
      if (!rating.hasOwnProperty([skill.value]))
        rating = { ...rating, [skill.value]: 1 };
      return null;
    });
  }
  store = { ...store, _other_skills, rating, others };
  return store;
};
export default handleSkillChange;
