import axios from "axios";

const API_ROOT = "http://localhost:3000/";

const instance = axios.create({
  baseURL: API_ROOT,
  withCredentials: true,
});

/**
 * axios api wrapper, for success and error handler
 *
 */
const request = () => {
  const onSuccess = (response) => {
    return response.data.result;
  };

  const onError = (error) => {
    console.error("Request Failed:", error.config);

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

    return Promise.reject(error.response?.data?.result?.error || error.message);
  };

  return instance().then(onSuccess).catch(onError);
};

export default request;
