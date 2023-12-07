import { TagProps } from './Tag.props';
import styles from './Tag.module.css';

export const Tag = ({ children, ...props }: TagProps): JSX.Element => {
	return (
		<p className={styles.tag} {...props}>{children}</p>
	);
};