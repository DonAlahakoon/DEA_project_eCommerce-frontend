import axios from "axios";

const baseUrl = 'http://localhost:5000'

export const getAllProducts = async () => {
    const data = await axios.get(`${baseUrl}/api/v1/products`)
    return data.data;
}

export const getProductById = async (id) => {
    const data = await axios.get(`${baseUrl}/api/v1/products/${id}`)
    return data.data;
}

export const createNewProduct = async (product) => {
    const data = await axios.post(`${baseUrl}/api/v1/products`, product)
    return data.data;
} 

export const updateProduct = async (id,product) => {
    const data = await axios.put(`${baseUrl}/api/v1/products/${id}`, product)
    return data.data;
} 

export const deleteProduct = async (id) => {
    const data = await axios.delete(`${baseUrl}/api/v1/products/${id}`)
    return data.data;
}  