// import styles from './page.module.css';

async function getPosts() {
	const result = fetch('https://jsonplaceholder.typicode.com/posts', {
		headers: {
			'Content-Type': 'application/json'
		}
	})
		.then((res) => {
			if (res.ok) {
				return res.json();
			}
			return Promise.reject(`Ошибка: ${res.status}`);
		});

	return result;

}

export default async function Home() {
	const posts = await getPosts();
	return (
		<main>
			Главная страница
			<div>
				<div>{JSON.stringify(posts)}</div>
				<div>{posts.length}</div>
			</div>
		</main>
	);
}
