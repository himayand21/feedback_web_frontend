import url from "../constants";
const checkDuplicateTeam = async function checkDuplicateTeam(teamName) {
  const res = await fetch(url + "/team/search/" + teamName, {
    method: "GET",
    "Content-Type": "application/json"
  });
  const response = await res.json();
  return response;
};

export default checkDuplicateTeam;
