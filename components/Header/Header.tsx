import { IHeaderProps } from './Header.props';
import styles from './Header.module.css';
import GithubLogo from '../../public/github.svg';
import Link from 'next/link';

export const Header = ({ className, ...props }: IHeaderProps): JSX.Element => {
	return (
		<header className={className} {...props}>
			<Link href="/" className={styles.headerTitle}>.my_blog</Link>

			<a
				href="https://github.com/DmitriyMGN"
				aria-label="Ссылка на гитхаб"
			><GithubLogo /></a>

			<a href="https://github.com/DmitriyMGN"><GithubLogo /></a>

		</header>
	);
};