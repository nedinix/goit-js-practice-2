export function createProductsMarkup(data) {
	console.log(data);

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
