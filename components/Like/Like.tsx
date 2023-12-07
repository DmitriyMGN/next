import { ILikeProps } from './Like.props';
import styles from './Like.module.css';
import LikeLogo from '../../public/like.svg';

export const Like = ({ children, ...props }: ILikeProps): JSX.Element => {
	return (
		<div className={styles.likeContainer}{...props}>
			<p className={styles.counter}>{children}</p>
			<LikeLogo />
		</div>
	);
};