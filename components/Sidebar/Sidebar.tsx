import { ISidebar } from './Sidebar.props';
import styles from './Sidebar.module.css';
// import cn from 'classnames';

export const Sidebar = ({ ...props }: ISidebar): JSX.Element => {
	return (
		<div className={styles.footer} {...props}>
			Sidebar
		</div>
	);
};