
import { getMenu } from '@/api/menu';
import { IMenuProps } from './Menu.props';
import styles from './Menu.module.css';
import { FirstLevelMenuItem, PageItem } from '@/interfaces/menu.interface';
import CoursesIcon from '../../public/courses.svg';
import BooksIcon from '../../public/books.svg';
import ServicesIcon from '../../public/services.svg';
import ProductsIcon from '../../public/products.svg';
import { TopLevelCategory } from '@/interfaces/page.interface';
import Link from 'next/link';
import cn from 'classnames';

const firstLevelMenu: FirstLevelMenuItem[] = [
	{ route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
	{ route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
	{ route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
	{ route: 'products', name: 'Товары', icon: <ProductsIcon />, id: TopLevelCategory.Products },
];

export default async function Menu({ ...props }: IMenuProps) {
	const firstCategory = 0;
	const menuData = await getMenu(firstCategory);
	// console.log(menu);

	const buildFirstLevel = () => {
		return (
			<div>
				{firstLevelMenu.map(m => (
					<div key={m.route}>
						<Link href={`/${m.route}`} className={styles.firstLevelLink}>
							<div className={cn(styles.firstLevel, {
								[styles.firstLevelActive]: m.id === firstCategory
							})} >
								{m.icon}
								<span>{m.name}</span>
							</div>
						</Link>
						{m.id === firstCategory && buildSecondLevel(m)}
					</div>
				))}
			</div>
		);
	};

	const buildSecondLevel = (menu: FirstLevelMenuItem) => {
		return (
			<div className={styles.secondBlock}>
				{menuData.map(m => (
					<div key={m._id.secondCategory}>
						<div className={styles.secondLevel}>{m._id.secondCategory}</div>
						<div className={cn(styles.secondLevelBlock, {
							[styles.secondLevelBlockOpened]: m.isOpened
						})}>
							{buildThirdLevel(m.pages, menu.route)}
						</div>
					</div>
				))}
			</div>
		)
	}

	const buildThirdLevel = (pages: PageItem[], route: string) => {
		return (
			pages.map(p => (
				<Link key={p._id} href={`/${route}/${p.alias}`} className={cn(styles.thirdLevel, {
					[styles.thirdLevelActive]: false
				})}>
					{p.category}
				</Link>
			))
		);
	};


	return (
		<nav className={styles.menu} {...props}>
			{buildFirstLevel()}
		</nav>
	);
}
