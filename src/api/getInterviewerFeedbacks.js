import url from "../constants";
const getInterviewerFeedbacks = async function getInterviewerFeedbacks(
  user_id
) {
  const res = await fetch(url + "/feedback/" + user_id, {
    method: "GET",
    "Content-Type": "application/json"
  });
  const response = await res.json();
  return response;
};

export default getInterviewerFeedbacks;
