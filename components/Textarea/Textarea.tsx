import { ITextareaProps } from './Textarea.props';
import styles from './Textarea.module.css';
import { ForwardedRef, forwardRef } from 'react';
import cn from 'classnames';

export const Textarea = forwardRef(({ className, error, ...props }: ITextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
	return (
		<div className={cn(styles.textAreaWrapper, className)}>
			<textarea
				className={cn(styles.textarea, {
					[styles.error]: error
				})}
				ref={ref}
				{...props} />
			{error && <span className={styles.errorMessage}>{error.message}</span>}
		</div>
	);
});