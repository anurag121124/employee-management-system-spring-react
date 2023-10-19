import axios from 'axios'

// Define the base URL for the API
const API_BASE_URL = 'http://localhost:8888/emp';

export const getEmployees = async () => {
    const response = await axios.get(`${API_BASE_URL}/all`);
    return response.data;
}

export const getEmployeeById = async (id) => {
    const response = await axios.get(`${API_BASE_URL}/findEmp/${id}`);
    return response.data;
}

export const addNewEmployee = async (emp) => {
    const response = await axios.post(`${API_BASE_URL}/addEmp`, emp);
    return response.data;
}

export const removeEmployee = async (id) => {
    const response = await axios.delete(`${API_BASE_URL}/removeEmp/${id}`);
    return response;
}

export const editEmployee = async (id, emp) => {
    const response = await axios.put(`/employee/${id}`, emp)
    return response
}