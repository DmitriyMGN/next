import { ISidebar } from './Sidebar.props';
import styles from './Sidebar.module.css';
import Menu from '@/components/Menu/Menu';
import Logo from '../../public/logo.svg';
import cn from 'classnames';
import Search from '../Search/Search';

export const Sidebar = async ({ className, ...props }: ISidebar) => {

	return (
		<div className={cn(className, styles.sidebar)} {...props}>
			<Logo className={styles.logo} />
			<Search />
			<Menu />
		</div>
	);
};