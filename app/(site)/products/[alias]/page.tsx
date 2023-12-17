// import styles from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Страница'
};

export default function PageProducts({ params }: { params: { alias: string } }): JSX.Element {

	return (
		<div>
			Страница с алиас {params.alias}
		</div>
	);
}
