import { ITimeProps } from './Time.props';
import styles from './Time.module.css';

export const Time = ({ children, ...props }: ITimeProps): JSX.Element => {
	return (
		<p className={styles.time} {...props}>{children}</p>
	);
};