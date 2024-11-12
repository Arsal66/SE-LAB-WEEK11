// Import Axios or Fetch (we'll use Axios here for simplicity and better error handling)
import axios from 'axios';
import { fetchProducts, createProduct } from './api/api';


// Base URL for your backend API
const BASE_URL = 'http://localhost:5000/products';

// Get all products
export const fetchProducts = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data; // Returns an array of products
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// Get a single product by ID
export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data; // Returns a single product object
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    throw error;
  }
};

// Create a new product
export const createProduct = async (productData) => {
  try {
    const response = await axios.post(BASE_URL, productData);
    return response.data; // Returns the newly created product
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
};

// Update an existing product by ID
export const updateProduct = async (id, productData) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, productData);
    return response.data; // Returns the updated product
  } catch (error) {
    console.error(`Error updating product with ID ${id}:`, error);
    throw error;
  }
};

// Delete a product by ID
export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data; // Returns a success message
  } catch (error) {
    console.error(`Error deleting product with ID ${id}:`, error);
    throw error;
  }
};
