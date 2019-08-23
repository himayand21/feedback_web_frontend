import url from "../constants";
const verifyUserCreds = async function verifyUserCreds(name, email, password) {
  const res = await fetch(
    url + "/user/" + name + "/" + email + "/" + password,
    { method: "GET", "Content-Type": "application/json" }
  );
  const response = await res.json();
  return response;
};

export default verifyUserCreds;
