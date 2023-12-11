import { ITitleProps } from './Title.props';
import styles from './Title.module.css';
import cn from 'classnames';

export const Title = ({ tag, children }: ITitleProps): JSX.Element => {
	switch (tag) {
		case 'h1':
			return <h1 className={cn(styles.title, styles.h1)}>{children}</h1>;
		case 'h2':
			return <h2 className={cn(styles.title, styles.h2)}>{children}</h2>;
		case 'h3':
			return <h3 className={cn(styles.title, styles.h3)}>{children}</h3>;
		default:
			return <></>;
	}
};