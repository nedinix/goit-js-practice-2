import { addProduct } from "../requests/products";
import { refs } from "./refs";
import { creatSingleProductMarkup } from "../services/markupService";

export async function onNewProductFormSubmit(event) {
    event.preventDefault();
    const newProduct = {};
    new FormData(event.currentTarget).forEach((value, name) => newProduct[name] = value.trim());
    const response = await addProduct(newProduct);
    refs.newProductSectionDiv.innerHTML = creatSingleProductMarkup(response);

}