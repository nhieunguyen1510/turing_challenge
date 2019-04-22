import axios from 'axios';

const baseApi = axios.create({
  baseURL: 'https://backendapi.turing.com/',
  timeout: 60000,
});

export default baseApi;