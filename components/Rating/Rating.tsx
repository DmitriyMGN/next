'use client';

import { IRatingProps } from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import { useEffect, useState, KeyboardEvent } from 'react';
import StarLogo from '../../public/star.svg';

export const Rating = ({ isEditable = false, rating, setRating, ...props }: IRatingProps): JSX.Element => {

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
		<div {...props}>
			{ratingArray.map((item, index) => <span key={index}>{item}</span>)}
		</div>
	);
};