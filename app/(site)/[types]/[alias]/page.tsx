// import styles from './page.module.css';
// import { getPage } from '@/api/page';

import { firstLevelMenu } from '@/helpers/helpers';
// import { Metadata } from 'next';
import { notFound } from "next/navigation"

// export const metadata: Metadata = {
// 	title: 'Страница'
// };

export default function PageProducts({ params }: { params: { alias: string, types: string } }) {
	// await new Promise((res) => setTimeout(() => { res('') }, 5000));
	// const pageData = await getPage('fdfdf');
	// console.log((await pageData)._id);
	const firstCategoryItem = firstLevelMenu.find(m => m.route == params.types);


	if (!firstCategoryItem) {
		return notFound();
	}


	return (
		<div>
			Страница с алиас {params.alias}{params.types}
		</div>
	);
}