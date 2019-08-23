const initialState = {
  teamName: "",
  data: {},
  designation: "",
  editMode: "",
  desgnError: false
};
const teamReducer = (state = initialState, action) => {
  let data = { ...state.data };
  switch (action.type) {
    case "EDIT_DESIGNATION":
      if (state.designation !== state.editMode) {
        data[state.designation] = data[state.editMode];
        delete data[state.editMode];
        return { ...state, data, editMode: "", designation: "" };
      } else return state;
    case "EDIT_DESGN":
      return { ...state, designation: action.desgn, editMode: action.desgn };
    case "CHANGE_TEAM_NAME":
      return { ...state, teamName: action.teamName };
    case "RESET_SIGN_UP":
      return initialState;
    case "EDIT_SKILL":
      data[action.designation].splice(
        action.old_skill_index,
        1,
        action.new_skill
      );
      return { ...state, data };
    case "REMOVE_DESGN":
      delete data[action.desgn];
      return { ...state, data };
    case "REMOVE_SKILL":
      data[action.key].splice(action.value, 1);
      return { ...state, data };
    case "ADD_DESIGNATION":
      if (state.designation.length) {
        let data = { ...state.data };
        if (Object.keys(data).includes(state.designation)) {
          return { ...state, desgnError: true };
        } else {
          data[state.designation] = [];
          return { ...state, data, designation: "", desgnError: false };
        }
      } else return state;
    case "ADD_SKILLS":
      data[action.designation].push(action.skill);
      return { ...state, data };
    case "UPDATE_DESGN":
      return { ...state, designation: action.designation };
    case "RESET_TEAM":
      return initialState;
    case "CONFIG_TEAM": {
      return { ...state, data: action.payload.data, teamName: action.payload.teamName };
    }
    default:
      return state;
  }
};

export default teamReducer;
