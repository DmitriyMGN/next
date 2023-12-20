// import styles from './page.module.css';
// import { getPage } from '@/api/page';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Страница'
};

export default function PageProducts({ params }: { params: { alias: string } }) {
	// await new Promise((res) => setTimeout(() => { res('') }, 5000));
	// const pageData = await getPage('fdfdf');
	// console.log((await pageData)._id);
	return (
		<div>
			Страница с алиас {params.alias}
		</div>
	);
}