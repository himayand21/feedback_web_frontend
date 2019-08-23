const resetForm = state => {
  let store = { ...state };
  store = {
    ...store,
    applicantName: "",
    date: new Date(),
    exp_year: "",
    exp_month: "",
    applying_for: "",
    rating: "",
    others: "",
    comments: "",
    _applying_for: "",
    _others: "",
    _other_skills: "",
    status: "",
    formData: ""
  };
  return store;
};
export default resetForm;
