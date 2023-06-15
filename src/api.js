import axios from "axios";

const token = localStorage.getItem("token"); // Retrieve the authorization token

const api = axios.create({
  baseURL: `http://localhost:5000`,
  headers: {
    Authorization: token,
  },
});

api.interceptors.request.use(
  function (req) {
    if(token) req.headers["Authorization"] = token

    return req
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error)
    return Promise.reject(error);
  }
);

export default api;
