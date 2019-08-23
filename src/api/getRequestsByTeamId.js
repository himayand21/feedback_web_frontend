import url from "../constants";
const getRequestsByTeamId = async function getRequestsByTeamId(team_id) {
  const res = await fetch(url + "/user/requests/" + team_id, {
    method: "GET",
    "Content-Type": "application/json"
  });
  const response = await res.json();
  return response;
};
export default getRequestsByTeamId;
