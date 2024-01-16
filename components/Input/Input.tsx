import { IInputProps } from './Input.props';
import styles from './Input.module.css';
import { ForwardedRef, forwardRef } from 'react';
import cn from 'classnames';

export const Input = forwardRef(({ className, error, ...props }: IInputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
	return (
		<div className={cn(className, styles.inputWrapper)}>
			<input
				className={cn(styles.input, {
					[styles.error]: error
				})}
				ref={ref}
				{...props}
			/>
			{error && <span className={styles.errorMessage}>{error.message}</span>}
		</div>

	);
});