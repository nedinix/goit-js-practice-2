import { instance } from "../services/api";

export async function getProducts() {
	const response = await instance.get("/products");
	console.log(response);
	return response.data.products;
}
