import { Htag, Tag } from '../index';
import { ITopPage } from './TopPage.props';
import styles from './TopPage.module.css';


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
				<Tag color='red' size='s'>hh.ru</Tag>
			</div>
		</div>
	);
};
