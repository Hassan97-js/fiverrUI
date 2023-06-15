import axios from "axios";

function makeApiRequest(method, url, data, params, credentials = true) {
  return axios({
    method,
    baseURL: "http://localhost:5000/api",
    url,
    params,
    data,
    withCredentials: credentials
  });
}

export { makeApiRequest };
