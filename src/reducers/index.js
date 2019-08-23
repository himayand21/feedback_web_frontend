import { combineReducers } from "redux";
import formReducer from "./form";
import userReducer from "./userData";
import signUpReducer from "./signUp";
import teamReducer from "./team";

export default combineReducers({
  form: formReducer,
  userData: userReducer,
  signUp: signUpReducer,
  team: teamReducer
});
