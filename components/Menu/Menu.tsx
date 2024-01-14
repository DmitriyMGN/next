"use client";

import { IMenuProps } from './Menu.props';
import styles from './Menu.module.css';
import { FirstLevelMenuItem, MenuItem, PageItem } from '@/interfaces/menu.interface';
import Link from 'next/link';
import cn from 'classnames';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { firstLevelMenu } from '@/helpers/helpers';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { setFirstCategory } from '@/lib/features/server-slice';
import { motion } from 'framer-motion';

export default function Menu({ ...props }: IMenuProps) {
	const [menuData, setMenuData] = useState<MenuItem[]>([]);
	const dispatch = useAppDispatch();
	const firstCategory = useAppSelector(state => state.serverSlice.value.firstCategory);
	const variants = {
		visible: {
			marginBottom: 20,
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.1
			}
		},
		hidden: { marginBottom: 0 }
	};

	const variantsChildren = {
		visible: {
			opacity: 1,
			height: 29
		},
		hidden: {
			opacity: 0,
			height: 0
		}
	};

	useEffect(() => {
		fetch('https://courses-top.ru/api/top-page/find', {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				'firstCategory': firstCategory
			}),
		})
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
				return Promise.reject(`Ошибка: ${res.status}`);
			})
			.then((data) => {
				return setMenuData(data);
			});

	}, [firstCategory]);

	const changeCategoryHandler = (firstCategoryId: number): void => {
		dispatch(setFirstCategory(firstCategory !== undefined ? firstCategoryId : null));
	};

	const openSecondLevel = (secondCategory: string) => {
		return setMenuData(menuData.map(m => {
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
						<Link href={`/${m.route}`} className={styles.firstLevelLink} onClick={() => changeCategoryHandler(m.id)}>
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
							<motion.div
								layout
								variants={variants}
								initial={m.isOpened ? 'visible' : 'hidden'}
								animate={m.isOpened ? 'visible' : 'hidden'}
								className={cn(styles.secondLevelBlock)}
							>
								{buildThirdLevel(m.pages, menu.route)}
							</motion.div>
						</div>
					);
				})}
			</div>
		);
	};

	const buildThirdLevel = (pages: PageItem[], route: string) => {
		return (
			pages.map(p => (
				<motion.div
					key={p._id}
					variants={variantsChildren}
				>
					<Link href={`/${route}/${p.alias}`} className={cn(styles.thirdLevel, {
						[styles.thirdLevelActive]: `/${route}/${p.alias}` === usePathname()
					})}>
						{p.category}
					</Link>

				</motion.div>

			))
		);
	};


	return (
		<nav className={styles.menu} {...props}>
			{buildFirstLevel()}
		</nav>
	);
}