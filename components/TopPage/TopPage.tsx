'use client';
import { Advantages, HHData, Htag, Sort, Tag } from '../index';
import { ITopPage } from './TopPage.props';
import styles from './TopPage.module.css';
import { TopLevelCategory } from '@/interfaces/page.interface';
import { SortEnum } from '../Sort/Sort.props';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { setProduct, setPrice } from '@/lib/features/sort-slice';

const TopPage = ({ firstCategory, page, products }: ITopPage): JSX.Element => {
	const dispatch = useAppDispatch();
	const sortedProducts = useAppSelector((state) => state.sortSlice.value.products);
	const sort = useAppSelector((state) => state.sortSlice.value.sort);

	const setSort = (sort: SortEnum) => {
		if (sort === 0) {
			dispatch(setProduct(sortedProducts));
		}
		if (sort === 1) {
			dispatch(setPrice(sortedProducts));
		}
	};


	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Htag tag='h1'>{page.title}</Htag>
				{products && <Tag color='gray' size='s'>{products.length}</Tag>}
				<Sort sort={sort} setSort={setSort} />
			</div>
			<div>
				{sortedProducts && sortedProducts.map(p => (<div key={p._id}>{p.title}</div>))}
			</div>
			<div className={styles.hhTitle}>
				<Htag tag='h2'>Вакансии - {page.category}</Htag>
				<div className={styles.hhContainer}>
					<Tag color='red' size='s'>hh.ru</Tag>
				</div>
			</div>
			{firstCategory === TopLevelCategory.Courses && page.hh && <HHData {...page.hh} />}
			{page.advantages && page.advantages.length > 0 &&
				<>
					<Htag tag='h2'>Преимущества</Htag>
					<Advantages advantages={page.advantages} />
				</>}
			{page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}
			<Htag tag='h2'>Получаемые навыки</Htag>
			{page.tags.map(t => <Tag key={t} color='primary' size='b'>{t}</Tag>)}
		</div>
	);
};

export default TopPage;