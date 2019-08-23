import resetForm from "../utils/resetForm";
import onStarClick from "../utils/onStarClick";
import onDesignationChange from "../utils/onDesignationChange";
import removeRating from "../utils/removeRating";
import handleSkillChange from "../utils/handleSkillChange";
import updateForm from "../utils/updateForm";

const initialState = {
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
  status: ""
};

const formReducer = (state = initialState, action) => {
  let store = {};
  switch (action.type) {
    case "UPDATE_FORM_FULFILLED":
      store = updateForm(state, action.payload);
      return store;
    case "RESET_FORM":
      store = resetForm(state);
      return store;
    case "GET_STATUS":
      return { ...state, status: action.status };
    case "DATE_CHANGE":
      return { ...state, date: action.date };
    case "UPDATE_FORM_STATE":
      return { ...state, [action.key]: action.value };
    case "STAR_CLICK":
      store = onStarClick(state, action.nextValue, action.name);
      return store;
    case "DESIGNATION_CHANGE":
      store = onDesignationChange(state, action.designation);
      return store;
    case "REMOVE_RATING":
      store = removeRating(state, action.skill);
      return store;
    case "HANDLE_SKILL_CHANGE":
      store = handleSkillChange(state, action._other_skills);
      return store;
    default:
      return state;
  }
};
export default formReducer;
