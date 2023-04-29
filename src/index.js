import "./styles/normalize.css";
import "./styles/index.css";
import { getProducts, getProductById } from "./requests/products";
import {
  createProductsMarkup,
  creatSingleProductMarkup,
} from "./services/markupService";
import { onNewProductFormSubmit } from "./js/onNewProductFormSubmit";
import { refs } from "./js/refs";


// getProducts()
// 	.then((r) => createProductsMarkup(r))
// 	.then((r) => refs.allProducts.insertAdjacentHTML("beforeend", r));

// async function renderAllProducts() {
// 	const response = await getProducts();
// 	const markup = createProductsMarkup(response);
// 	refs.allProducts.insertAdjacentHTML("beforeend", markup);
// }

// renderAllProducts();

refs.singleProductForm.addEventListener("submit", onSingleProductFormSubmit);

async function onSingleProductFormSubmit(event) {
	event.preventDefault();
	const id = event.currentTarget.elements.id.value.trim();
	const response = await getProductById(id);
	refs.singleProductDiv.innerHTML = creatSingleProductMarkup(response);
}

refs.newProductForm.addEventListener("submit", onNewProductFormSubmit);



