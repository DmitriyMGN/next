'use client';

import { ICommentFormProps } from './CommentForm.props';
import styles from './CommentForm.module.css';
import { useForm } from 'react-hook-form';
import { Input, Textarea } from '..';

const CommentForm = ({ ...props }: ICommentFormProps): JSX.Element => {

	interface IReviewForm {
		name: string,
		comment: string
	}

	const { register, handleSubmit, formState: { errors }, reset } = useForm<IReviewForm>();

	const onSubmit = () => {
		reset();
		console.log("submitted");
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)} {...props}>
			<Input
				placeholder='Имя'
				{...register('name', { required: { value: true, message: "Заполните имя" } })}
				error={errors.name}
			/>
			<Textarea
				placeholder='Комментарий'
				{...register('comment', { required: { value: true, message: "Заполните комментарий" } })}
				error={errors.comment}
			/>
			<button className={styles.button}>Отправить</button>
		</form>
	);
};

export default CommentForm;

