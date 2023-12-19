'use client';
import { getMenu } from '@/api/menu';

export default async function Menu() {
	const menu = await getMenu(0);
	console.log(menu);


	return (
		<main>
			<div>{JSON.stringify({ menu })}</div>
		</main>
	);
}
