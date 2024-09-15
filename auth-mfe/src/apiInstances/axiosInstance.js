import axios from 'axios';

// Create an axios instance
export const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // Your BFF URL
});

// Add a request interceptor to include the token in every request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
