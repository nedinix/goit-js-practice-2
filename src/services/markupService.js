export function createProductsMarkup(data) {
	
	return data
		.map(
			({ title, price, description }) =>
				`
      <li>
	      <h3>${title}</h3>
	      <p>${description}</p>
	      <p>${price}</p>
      </li>
  `
		)
		.join("");
}

export function creatSingleProductMarkup(data) {
	const { title, price, description } = data;
	return `<h3>${title}</h3>
	      <p>${description}</p>
	      <p>${price}</p>`;
}