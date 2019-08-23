import url from "../constants";
const submitRequest = async function submitRequest(data) {
  const res = await fetch(url + "/user/create", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
  const response = await res.json();
  return response;
};

export default submitRequest;
