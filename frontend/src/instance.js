import axios from "axios";

const API_ROOT =
  process.env.REACT_APP_MODE === "production"
    ? "/api"
    : "http://localhost:4000/api";

const instance = axios.create({
  baseURL: API_ROOT,
  withCredentials: true,
});

const request = (options) => {
  // if (process.env.REACT_APP_DEBUG === "true") {
  if (true) {
    console.debug("Request Option", options);
  }
  const onSuccess = (response) => {
    if (true) {
      console.debug("Request Successful!", response);
    }
    return response.data;
  };

  const onError = (error) => {
    console.warn("Request Failed:", error);

    if (error.response) {
      // Request was made but server responded with something
      // other than 2xx
      console.error("Status:", error.response.status);
      console.error("Data:", error.response.data);
      console.error("Headers:", error.response.headers);
    } else {
      // Something else happened while setting up the request
      // triggered the error
      console.error("Error Message:", error.message);
    }

    return Promise.reject(error);
  };

  return instance(options).then(onSuccess).catch(onError);
};

export { request, instance };
