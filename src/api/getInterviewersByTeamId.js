import url from "../constants";
const getInterviewersByTeamId = async function getInterviewersByTeamId(
  team_id
) {
  const res = await fetch(url + "/user/interviewers/" + team_id, {
    method: "GET",
    "Content-Type": "application/json"
  });
  const response = await res.json();
  return response;
};
export default getInterviewersByTeamId;
