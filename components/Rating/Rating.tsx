'use client';

import { IRatingProps } from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import { useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef } from 'react';
import StarLogo from '../../public/star.svg';

export const Rating = forwardRef(({ isEditable = false, rating, setRating, error, ...props }: IRatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {

	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		const constructorRating = (currentRating: number): void => {
			const updatedArray = ratingArray.map((item: JSX.Element, index: number) => {
				return (
					<StarLogo
						className={cn(styles.star, {
							[styles.fill]: index < currentRating,
							[styles.editable]: isEditable
						})}
						onMouseEnter={() => changeDisplay(index + 1)}
						onMouseLeave={() => changeDisplay(rating)}
						onClick={() => onClickHandler(index + 1)}
						tabIndex={isEditable ? 0 : -1}
						onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(index + 1, e)}

					/>
				);
			});
			setRatingArray(updatedArray);
		};


		const changeDisplay = (index: number) => {
			if (!isEditable) {
				return;
			}
			constructorRating(index);
		};

		const onClickHandler = (index: number) => {
			if (!isEditable || !setRating) {
				return;
			}
			setRating(index);
		};


		const handleSpace = (index: number, e: KeyboardEvent<SVGElement>) => {
			if (e.code !== 'Space' || !setRating) {
				return;
			}
			setRating(index);
		};

		constructorRating(rating);

	}, [rating]);



	return (
		<div className={cn(styles.ratingWrapper, {
			[styles.error]: error
		})} ref={ref} {...props}>
			{ratingArray.map((item, index) => <span key={index}>{item}</span>)}
			{error && <span className={styles.errorMessage}>{error.message}</span>}
		</div>
	);
});