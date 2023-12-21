// import styles from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About'
};

export default function Types({ params }: { types: string }): JSX.Element {

	return (
		<div>
			О нас {params.types}
		</div>
	);
}