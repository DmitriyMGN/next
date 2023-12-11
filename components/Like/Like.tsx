'use client'

import { ILikeProps } from './Like.props';
import styles from './Like.module.css';
import LikeLogo from '../../public/like.svg';
import { useState } from 'react';

export const Like = ({ children, ...props }: ILikeProps): JSX.Element => {
	const [isLike, setLike] = useState<boolean>(false);

	const buttonLikeHandler = () => {
		setLike(!isLike);
		fetch('https://jsonplaceholder.typicode.com/posts/1')
			.then(response => response.json())
			.then(json => console.log(json));
	};

	return (
		<div className={styles.likeContainer}{...props}>
			<p className={styles.counter}>{children}</p>
			<button className={styles.button} onClick={buttonLikeHandler}><LikeLogo className={isLike ? styles.activeLogo : ""} /></button>
		</div>
	);
};