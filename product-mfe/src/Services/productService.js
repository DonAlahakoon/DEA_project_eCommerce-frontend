import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/products'; // Update this with your BFF URL

export const getAllProducts = (token) => {
  return axios.get(API_BASE_URL, {
    headers: {
      Authorization: `Bearer ${token}`, // Include the token in the Authorization header
    },
  });
};

export const addNewProduct = (product, token) => {
  return axios.post(API_BASE_URL, product, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateProduct = (id, product, token) => {
  return axios.put(`${API_BASE_URL}/${id}`, product, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteProduct = (id, token) => {
  return axios.delete(`${API_BASE_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getProductsByCategoryId = (id, token) => {
    return axios.get(`${API_BASE_URL}/category/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };


export const getProductById = (id, token) => {
    return axios.get(`${API_BASE_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };