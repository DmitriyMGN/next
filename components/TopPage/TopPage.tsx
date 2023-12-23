import { HHData, Htag, Tag } from '../index';
import { ITopPage } from './TopPage.props';
import styles from './TopPage.module.css';
import { TopLevelCategory } from '@/interfaces/page.interface';


export const TopPage = ({ firstCategory, page, products }: ITopPage): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Htag tag='h1'>{page.title}</Htag>
				{products && <Tag color='gray' size='s'>{products.length}</Tag>}
				<span>Сортировка</span>
			</div>
			<div>
				{products && products.map(p => (<div key={p._id}>{p.title}</div>))}
			</div>
			<div className={styles.hhTitle}>
				<Htag tag='h2'>Вакансии - {page.category}</Htag>
				<div className={styles.hhContainer}>
					<Tag color='red' size='s'>hh.ru</Tag>
				</div>
			</div>
			{firstCategory === TopLevelCategory.Courses && <HHData {...page.hh} />}
		</div>
	);
};
