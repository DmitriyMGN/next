"use client";

import { IMenuProps } from './Menu.props';
import styles from './Menu.module.css';
import { FirstLevelMenuItem, PageItem } from '@/interfaces/menu.interface';
import Link from 'next/link';
import cn from 'classnames';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { firstLevelMenu } from '@/helpers/helpers';
// import { getMenu } from '@/api/menu';
// import { useEffect } from 'react';
// import { logIn, logOut } from '@/lib/features/test-slice';
// import { useAppDispatch, useAppSelector } from '@/lib/hooks';

export default function Menu({ menu, firstCategory, ...props }: IMenuProps) {

	const [menuData, setMenuData] = useState(menu);
	// const [menuData1, setMenuData1] = useState([]);

	// useEffect(() => {
	// 	function test() {
	// 		fetch('https://courses-top.ru/api/top-page/find', {
	// 			method: "POST",
	// 			headers: {
	// 				'Content-Type': 'application/json'
	// 			},
	// 			body: JSON.stringify({
	// 				'firstCategory': firstCategory
	// 			}),
	// 		})
	// 			.then((res) => {
	// 				if (res.ok) {
	// 					return res.json();
	// 				}
	// 				return Promise.reject(`Ошибка: ${res.status}`);
	// 			})
	// 			.then((data) => {
	// 				setMenuData(data);
	// 			});
	// 	}
	// 	test()
	// })

	// console.log(menuData1)

	// const username = useAppSelector(((state) => state.authReducer.value.username));
	// console.log(username)
	// const dispatch = useAppDispatch();

	// const onClickLogIn = () => {
	// 	dispatch(logIn("dfsfd"))
	// };

	const openSecondLevel = (secondCategory: string) => {
		return setMenuData(menu.map(m => {
			if (m._id.secondCategory === secondCategory) {
				m.isOpened = !m.isOpened;
			}
			return m;
		}));
	};

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
				{menuData.map(m => {
					if (m.pages.map(p => p.alias).includes(usePathname().split('/')[2])) {
						m.isOpened = true;
					}
					return (
						<div key={m._id.secondCategory}>
							<div className={styles.secondLevel} onClick={() => openSecondLevel(m._id.secondCategory)}>{m._id.secondCategory}</div>
							<div className={cn(styles.secondLevelBlock, {
								[styles.secondLevelBlockOpened]: m.isOpened
							})}>
								{buildThirdLevel(m.pages, menu.route)}
							</div>
						</div>
					);
				})}
			</div>
		);
	};

	const buildThirdLevel = (pages: PageItem[], route: string) => {
		return (
			pages.map(p => (
				<Link key={p._id} href={`/${route}/${p.alias}`} className={cn(styles.thirdLevel, {
					[styles.thirdLevelActive]: `/${route}/${p.alias}` === usePathname()
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
