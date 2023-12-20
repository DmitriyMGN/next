"use client";

import { IMenuProps } from './Menu.props';
import styles from './Menu.module.css';
import { FirstLevelMenuItem, PageItem } from '@/interfaces/menu.interface';
import Link from 'next/link';
import cn from 'classnames';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { firstLevelMenu } from '@/helpers/helpers';

export default function Menu({ menu, firstCategory, ...props }: IMenuProps) {

	const [menuData, setMenuData] = useState(menu);

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
