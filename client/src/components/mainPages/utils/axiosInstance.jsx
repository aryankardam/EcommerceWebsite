// src/utils/axiosInstance.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000', // Your backend server
  withCredentials: true, // Optional: if using cookies or tokens
});

export default instance;
