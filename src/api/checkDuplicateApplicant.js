import url from "../constants";
const checkDuplicateApplicant = async function checkDuplicateApplicant(
  applicantName
) {
  const res = await fetch(url + "/feedback/search/" + applicantName, {
    method: "GET",
    "Content-Type": "application/json"
  });
  const response = await res.json();
  return response;
};

export default checkDuplicateApplicant;
