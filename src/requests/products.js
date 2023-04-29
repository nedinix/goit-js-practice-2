import { instance } from "../services/api";

export async function getProducts() {
  try {
    const response = await instance.get("/products");
    return response.data.products;
  } catch (error) {
    console.log("Ooops! It is error!");
  }
  
}

export async function getProductById(id) {
  try {
  const response = await instance.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.log("Ooops! It is error!");
  }
}

export async function addProduct(data) {
  try {
    const response = await instance.post(`/products/add`, data);
    return response.data;
  } catch (error) {
    console.log("Ooops! It is error!");
  }
}
