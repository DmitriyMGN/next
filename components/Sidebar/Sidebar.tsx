import { ISidebar } from './Sidebar.props';
import styles from './Sidebar.module.css';
import Menu from '@/components/Menu/Menu';
import { getMenu } from '@/api/menu';
// import cn from 'classnames';

export const Sidebar = async ({ ...props }: ISidebar) => {
	const firstCategory = 0;
	const menuData = await getMenu(firstCategory);

	return (
		<div className={styles.footer} {...props}>
			<Menu menu={menuData} firstCategory={firstCategory} />
		</div>
	);
};