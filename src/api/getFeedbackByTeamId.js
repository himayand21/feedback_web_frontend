import url from "../constants";
const getFeedbackByTeamId = async function getFeedbackByTeamId(team_id) {
  const res = await fetch(url + "/feedback/team/" + team_id, {
    method: "GET",
    "Content-Type": "application/json"
  });
  const response = await res.json();
  return response;
};

export default getFeedbackByTeamId;
