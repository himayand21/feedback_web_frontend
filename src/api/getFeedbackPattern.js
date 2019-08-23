import url from "../constants";
const getFeedbackPattern = async function getFeedbackPattern(team_id) {
  const res = await fetch(url + "/team/" + team_id, {
    method: "GET",
    "Content-Type": "application/json"
  });
  const response = await res.json();
  return response;
};
export default getFeedbackPattern;
