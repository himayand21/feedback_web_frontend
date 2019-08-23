import url from "../constants";
const uploadResume = async function uploadResume(resume) {
  const res = await fetch(url + "/upload", {
    method: "POST",
    body: resume
  });
  const response = await res.json();

  return response;
};

export default uploadResume;
