import { ISortProps, SortEnum } from './Sort.props';
import styles from './Sort.module.css';
import SortIcon from '@/public/sort.svg';
import cn from 'classnames';


export const Sort = ({ sort, setSort, className, ...props }: ISortProps): JSX.Element => {
	return (
		<div className={cn(styles.sort, className)} {...props}>
			<span
				onClick={() => setSort(SortEnum.Rating)}
				className={cn({
					[styles.active]: sort == SortEnum.Rating
				})}
			>
				<SortIcon className={styles.sortIcon} />По&nbsp;рейтингу
			</span>
			<span
				onClick={() => setSort(SortEnum.Price)}
				className={cn({
					[styles.active]: sort == SortEnum.Price
				})}
			>
				<SortIcon className={styles.sortIcon} />По&nbsp;цене
			</span>
		</div>
	);
};