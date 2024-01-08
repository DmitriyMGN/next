import { IParagraphProps } from './Paragraph.props';
import styles from './Paragraph.module.css';
import cn from 'classnames';

export const Paragraph = ({ children, size = 's', default1 = false, ...props }: IParagraphProps): JSX.Element => {
	return (
		<p className={cn(styles.paragraph, {
			[styles.s]: size === 's',
			[styles.b]: size === 'b',
			[styles.m]: size === 'm',
			[styles.default]: default1 === true,
		})}
			{...props}
		>{children}
		</p>
	);
};