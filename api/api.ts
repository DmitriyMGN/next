export const getPosts = async () => {
	const result = await fetch('https://jsonplaceholder.typicode.com/posts')
		.then((res) => {
			if (res.ok) {
				return res.json();
			}
			return Promise.reject(`Ошибка: ${res.status}`);
		})
		.then((data) => {
			return data;
		});

	return result;
};