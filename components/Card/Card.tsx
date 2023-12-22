import { PProps } from './Card.props';
import styles from './Card.module.css';
import cn from 'classnames';

export const Card = ({ children, size = 's', ...props }: PProps): JSX.Element => {
	return (
		<>
			<p className={cn(styles.paragraph, {
				[styles.s]: size === 's',
				[styles.b]: size === 'b',
				[styles.m]: size === 'm',
			})}
				{...props}
			>{children}
			</p>
		</>
	);
};