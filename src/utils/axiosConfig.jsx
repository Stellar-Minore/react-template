import axios from 'axios';

export const apiErrorResponse = (error) => {
  if (error.response) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    console.log(error.request);
  } else {
    console.log('Error', error.message);
  }
};

const instance = axios.create({
  baseURL: 'http://localhost:3000'
});

instance.interceptors.request.use((config) => config);

export default instance;
