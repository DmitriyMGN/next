"use client";
// import styles from './page.module.css';
// import { getPage } from '@/api/page';

import { firstLevelMenu } from '@/helpers/helpers';
// import { Metadata } from 'next';
import { notFound } from "next/navigation";
import { setPath, setMenu } from '@/lib/features/server-slice';
import { useAppDispatch } from '@/lib/hooks';
import { useEffect } from 'react';

// export const metadata: Metadata = {
// 	title: 'Страница'
// };

export default function PageProducts({ params }: { params: { alias: string, types: string } }) {
	// await new Promise((res) => setTimeout(() => { res('') }, 5000));
	// const pageData = await getPage('fdfdf');
	// console.log((await pageData)._id);
	const dispatch = useAppDispatch();

	const firstCategoryItem = firstLevelMenu.find(m => m.route == params.types);

	useEffect(() => {
		dispatch(setPath(firstCategoryItem !== undefined ? firstCategoryItem.id : null));

		fetch('https://courses-top.ru/api/top-page/find', {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				'firstCategory': firstCategoryItem !== undefined ? firstCategoryItem.id : 0
			}),
		})
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
				return Promise.reject(`Ошибка: ${res.status}`);
			})
			.then((data) => {
				setMenuData(data);
			});
	}, []);



	if (!firstCategoryItem) {
		return notFound();
	}


	return (
		<div>
			Страница с алиас {params.alias}{params.types}
		</div>
	);
}