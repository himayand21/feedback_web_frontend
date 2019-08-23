import url from "../constants";
const removeFeedbackById = async function removeFeedbackById(feedback_id) {
  const res = await fetch(url + "/feedback/" + feedback_id + "/delete", {
    method: "DELETE"
  });
  const response = await res.json();

  return response;
};

export default removeFeedbackById;
