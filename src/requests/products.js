import { instance } from "../services/api";

export async function getProducts() {
  const response = await instance.get("/products");
  return response.data.products;
}

export async function getProductById(id) {
  const response = await instance.get(`/products/${id}`);
  return response.data;
}
