const getRequestsAndPanel = (state, payload) => {
  let store = { ...state };
  store = {
    ...state,
    requests: payload.requests,
    interviewers: payload.interviewers
  };
  return store;
};
export default getRequestsAndPanel;
