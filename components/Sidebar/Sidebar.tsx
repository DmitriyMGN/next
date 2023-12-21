import { ISidebar } from './Sidebar.props';
import styles from './Sidebar.module.css';
import Menu from '@/components/Menu/Menu';
import { getMenu } from '@/api/menu';
// import { setPath } from '@/lib/features/test-slice';
// import { useAppDispatch, useAppSelector } from '@/lib/hooks';

// import cn from 'classnames';


export const Sidebar = async ({ ...props }: ISidebar) => {

	const firstCategory = 1;
	const menuData = await getMenu(firstCategory);
	Top


	return (
		<div className={styles.footer} {...props}>
			<Menu menu={menuData} firstCategory={firstCategory} />
		</div>
	);
};