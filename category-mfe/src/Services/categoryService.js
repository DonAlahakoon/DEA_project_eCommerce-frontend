import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/categories'; // Update this with your BFF URL

export const getAllCategories = (token) => {
  return axios.get(API_BASE_URL, {
    headers: {
      Authorization: `Bearer ${token}`, // Include the token in the Authorization header
    },
  });
};

export const addNewCategory = (category, token) => {
  return axios.post(API_BASE_URL, category, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateCategory = (id, category, token) => {
  return axios.put(`${API_BASE_URL}/${id}`, category, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteCategory = (id, token) => {
  return axios.delete(`${API_BASE_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getCategoryById = (id, token) => {
  return axios.get(`${API_BASE_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
