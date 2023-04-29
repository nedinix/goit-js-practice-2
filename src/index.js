import "./styles/normalize.css";
import "./styles/index.css";
import { getProducts } from "./requests/products";
import { createProductsMarkup } from "./services/markupService";
import { refs } from "./js/refs";

// getProducts()
// 	.then((r) => createProductsMarkup(r))
// 	.then((r) => refs.allProducts.insertAdjacentHTML("beforeend", r));

async function renderAllProducts() {
	const response = await getProducts();
	const markup = createProductsMarkup(response);
	refs.allProducts.insertAdjacentHTML("beforeend", markup);
}

renderAllProducts();
