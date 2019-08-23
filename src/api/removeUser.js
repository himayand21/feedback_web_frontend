import url from "../constants";
const removeUser = async function removeUser(user_id) {
  const res = await fetch(url + "/user/" + user_id + "/delete", {
    method: "DELETE"
  });
  const response = await res.json();
  return response;
};

export default removeUser;
