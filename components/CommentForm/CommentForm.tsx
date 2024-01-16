'use client';

import { ICommentFormProps } from './CommentForm.props';
import styles from './CommentForm.module.css';
import { useForm } from 'react-hook-form';
import { Input, Textarea } from '..';
import { useState } from 'react';
import cn from 'classnames';

const CommentForm = ({ cardId, ...props }: ICommentFormProps): JSX.Element => {

	interface IReviewForm {
		name: string,
		comment: string
	}

	const { register, handleSubmit, formState: { errors }, reset } = useForm<IReviewForm>();
	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [error, setError] = useState<string>('');

	const onSubmit = (formData: IReviewForm) => {
		fetch("https://jsonplaceholder.typicode.com/comments", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(
				{
					"userId": 1,
					"id": cardId,
					"title": formData.name,
					"body": formData.comment
				}
			),
		})
			.then((res) => {
				if (res.ok) {
					setIsSuccess(true);
					reset();
					return res.json();
				}
				setError('Что-то пошло не так...');
				return Promise.reject(`Ошибка: ${res.status}`);
			});
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
			{isSuccess && <div className={cn(styles.success, styles.panel)}>
				<div className={styles.successTitle}>
					Ваш отзыв отправлен!
				</div>
				<div>
					Спасибо, ваш отзыв будет опубликован после проверки.
				</div>
			</div>}
			{error && <div className={cn(styles.error, styles.panel)}>
				{error}
			</div>}
		</form>

	);
};

export default CommentForm;

