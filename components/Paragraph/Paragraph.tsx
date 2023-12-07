import { IParagraphProps } from './Paragraph.props';
import styles from './Paragraph.module.css';
import cn from 'classnames';

export const Paragraph = ({ children, size = 's', ...props }: IParagraphProps): JSX.Element => {
	return (
		<p className={cn(styles.paragraph, {
			[styles.s]: size === 's',
			[styles.b]: size === 'b',
			[styles.m]: size === 'm',
		})}
			{...props}
		>{children}
		</p>
	);
};