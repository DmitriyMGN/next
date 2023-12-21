import { IHeaderProps } from './Header.props';
import styles from './Header.module.css';
import GithubLogo from '../../public/github.svg';

export const Header = ({ className, ...props }: IHeaderProps): JSX.Element => {
	return (
		<header className={className} {...props}>
			<span className={styles.headerTitle}>.my_blog</span>
			<a href="https://github.com/DmitriyMGN"><GithubLogo /></a>
		</header>
	);
};