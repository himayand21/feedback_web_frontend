import submitAndVerify from "../utils/submitAndVerify";
import updateInterviewerData from "../utils/updateInterviewerData";
import updateAdminData from "../utils/updateAdminData";
import updateData from "../utils/updateData";
import removeFeedback from "../utils/removeFeedback";
import updateSearchBar from "../utils/updateSearchBar";
import getRequestsAndPanel from "../utils/getRequestsAndPanel";
import userRemove from "../utils/userRemove";
import updateRequest from "../utils/updateRequest";
import updatePanel from "../utils/updatePanel";
import search from "../utils/search";
import findByName from "../utils/findByName";

const initialState = {
  userId: "",
  name: "",
  email: "",
  password: "",
  teamId: "",
  admin: false,
  authorized: false,
  requests: [],
  interviewers: [],
  data: [],
  old_data: []
};
const userReducer = (state = initialState, action) => {
  let store = {};
  switch (action.type) {
    case "RESET_STATE":
      localStorage.clear();
      return {
        ...state,
        userId: "",
        name: "",
        email: "",
        password: "",
        teamId: "",
        admin: false,
        authorized: false,
        requests: [],
        interviewers: [],
        data: [],
        old_data: []
      };
    case "HYDRATE_STATE_WITH_LOCAL":
      store = { ...state };
      for (let key in state) {
        if (localStorage.hasOwnProperty(key)) {
          let value = localStorage.getItem(key);
          try {
            value = JSON.parse(value);
            store = { ...store, [key]: value };
          } catch (e) {
            store = { ...store, [key]: value };
          }
        }
      }
      return store;
    case "UPDATE_STATE":
      return { ...state, [action.key]: action.value };
    case "SUBMIT_AND_VERIFY":
      return submitAndVerify(state, action.details);
    case "UPDATE_ADMIN_DATA":
      return updateAdminData(state, action.details);
    case "UPDATE_DATA":
      return updateData(state, action.details);
    case "UPDATE_INTERVIEWER_DATA":
      return updateInterviewerData(state, action.details);
    case "REMOVE_FEEDBACK":
      return removeFeedback(state, action.index, action.id);
    case "UPDATE_SEARCH_BAR":
      return updateSearchBar(state);
    case "GET_REQ_PANEL_FULFILLED":
      return getRequestsAndPanel(state, action.payload);
    case "REMOVE_USER":
      return userRemove(state, action.id, action.index, action.category);
    case "UPDATE_REQ":
      return updateRequest(state, action.id, action.index);
    case "UPDATE_PANEL":
      return updatePanel(state, action.id, action.index);
    case "SEARCH":
      return search(state, action.index, action.value);
    case "SEARCH_BY_NAME":
      return findByName(state, action.names);

    default:
      return state;
  }
};
export default userReducer;
