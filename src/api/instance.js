import axios from 'axios';

function apiInstance() {
  return axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

export default apiInstance;
