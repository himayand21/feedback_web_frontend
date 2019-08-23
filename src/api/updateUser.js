import url from "../constants";
const updateUser = async function updateUser(user_id, user_data) {
  const res = await fetch(url + "/user/" + user_id + "/update", {
    method: "PUT",
    body: JSON.stringify(user_data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
  const response = await res.json();
  return response;
};

export default updateUser;
