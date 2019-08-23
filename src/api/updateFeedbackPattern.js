import url from "../constants";
const updateFeedbackPattern = async function updateFeedbackPattern(
  teamId,
  data
) {
  const res = await fetch(url + "/team/" + teamId + "/update", {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
  const response = await res.json();
  return response;
};

export default updateFeedbackPattern;
