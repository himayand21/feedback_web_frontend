import url from "../constants";
const checkDuplicateName = async function checkDuplicateName(userName) {
  const res = await fetch(url + "/user/" + userName, {
    method: "GET",
    "Content-Type": "application/json"
  });
  console.log(res);
  const response = await res.json();
  return response;
};

export default checkDuplicateName;
