import removeFeedbackById from "../api/removeFeedbackById";
const removeFeedback = (state, index, id) => {
  let store = { ...state };
  let data = [...state.data];
  data.splice(index, 1);
  store = { ...state, data };
  removeFeedbackById(id);
  return store;
};
export default removeFeedback;
