import axios from "axios";

function makeApiRequest(method, url, data, credentials = true) {
  return axios({
    method,
    baseURL: "http://localhost:5000/api",
    url,
    data,
    withCredentials: credentials
  });
}

export { makeApiRequest };
