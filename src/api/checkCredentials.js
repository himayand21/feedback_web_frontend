import url from "../constants";
const checkCredentials = async function checkCredentials(
  name,
  email,
  question,
  answer
) {
  const res = await fetch(
    url + "/user/check/" + name + "/" + email + "/" + question + "/" + answer,
    { method: "GET", "Content-Type": "application/json" }
  );
  const response = await res.json();
  return response;
};

export default checkCredentials;
