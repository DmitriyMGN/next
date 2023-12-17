// import styles from './page.module.css';

// async function getMenu(firstCategory: number) {
// 	const res = await fetch('https://courses-top.ru', {
// 		method: 'POST',
// 		body: JSON.stringify({
// 			firstCategory: firstCategory
// 		}),
// 		headers: new Headers({ 'content-type': 'application/json' })
// 	});
// 	console.log(res.json());
// 	return res.json();
// }

export default async function Home() {
	// const menu = await getMenu(1);
	return (
		<main>
			Главная страница
			<div>
				{/* <div>{JSON.stringify(menu)}</div>
				<div>{menu.length}</div> */}
			</div>
		</main>
	);
}
