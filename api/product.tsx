import { ProductModel } from '@/interfaces/product.interface';

export async function getProduct(): Promise<ProductModel[]> {
	const result = fetch("https://courses-top.ru/api/product/find", {
		method: "POST",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			"category": "Photoshop",
			"limit": 10
		}),
	})
		.then((res) => {
			if (res.ok) {
				return res.json();
			}
			return Promise.reject(`Ошибка: ${res.status}`);
		});
	return result;
}