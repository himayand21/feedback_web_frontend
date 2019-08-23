import url from "../constants";
const loadAllTeamNames = async function loadAllTeamNames() {
  const res = await fetch(url + "/team/all", {
    method: "GET",
    "Content-Type": "application/json"
  });
  const response = await res.json();
  return response;
};

export default loadAllTeamNames;
