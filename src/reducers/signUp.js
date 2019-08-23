const initialState = {
  name: "",
  email: "",
  password: "",
  teamSelect: "",
  team: "",
  teamNames: [],
  answer: "",
  selectedOption: []
};
const signUpReducer = (state = initialState, action) => {
  let store = {};
  switch (action.type) {
    case "UPDATE_STATE_SIGNUP":
      return { ...state, [action.key]: action.value };
    case "GET_TEAM_NAMES_FULFILLED":
      return { ...state, teamNames: action.payload };
    case "HANDLE_TEAM_CHANGE":
      return { ...state, team: action.team, teamSelect: action.teamSelect };

    case "SELECT_QUESTION":
      return { ...state, selectedOption: action.selectedOption };
    case "RESET_SIGN_UP":
      return initialState;
    default:
      return state;
  }
};

export default signUpReducer;
