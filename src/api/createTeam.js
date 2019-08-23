import url from "../constants";
const createTeam = async function createTeam(data) {
  const res = await fetch(url + "/team/create", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
  const response = await res.json();
  return response;
};

export default createTeam;
