import axios from "axios";

const baseUrl = 'http://localhost:5000/auth'

export const signIn = async (email, password) => {
    try {
      const response = await axios.post(`${baseUrl}/signin`, { email, password });
      return response.data; // Returns the token or other data
    } catch (error) {
      console.error("Error during sign-in: ", error);
      throw error;
    }
};
export const signUp = async (email, name, password) => {
  
  try{
    const response = await axios.post(`${baseUrl}/signup`,{email,name,password});
    return response.data;
  }catch (error) {
    console.error("Error during sign-up: ", error);
    throw error;
  }
}
export const confirmSignup = async (email,code) => {
  try{
    const response = await axios.post(`${baseUrl}/confirm-signup`,{email,code});
    return response.data;
  }catch (error) {
    console.error("Error during confirm sign-up: ", error);
    throw error;
  }
}