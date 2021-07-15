import axios from 'axios';

const axiosService = axios.create({
  baseURL: 'https://hacker-news.firebaseio.com/v0',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosService;
