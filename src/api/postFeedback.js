import url from "../constants";
const postFeedback = async function postFeedback(form) {
  const res = await fetch(url + "/feedback/create", {
    method: "POST",
    body: JSON.stringify(form),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
  const response = await res.json();

  return response;
};

export default postFeedback;
