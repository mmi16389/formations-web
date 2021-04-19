import axios from 'axios';

const instance = axios.create({
  withCredentials: false,
  baseURL: `http://localhost:3005`,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export default instance;