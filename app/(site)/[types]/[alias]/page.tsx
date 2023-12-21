"use client";
import { firstLevelMenu } from '@/helpers/helpers';
import { notFound } from "next/navigation";
import { setFirstCategory } from '@/lib/features/server-slice';
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
		dispatch(setFirstCategory(firstCategoryItem !== undefined ? firstCategoryItem.id : null));
	});

	if (!firstCategoryItem) {
		return notFound();
	}

	return (
		<div>
			Страница с алиас {params.alias}{params.types}
		</div>
	);
}