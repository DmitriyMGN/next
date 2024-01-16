'use client';

import styles from './AnimateCard.module.css';
import { IAnimateCardProps } from './AnimateCard.props';
import { motion } from 'framer-motion';

export const AnimateCard = ({ children }: IAnimateCardProps): JSX.Element => {
	const variants = {
		visible: {
			opacity: 1,
			transition: {
				duration: 1.3,
			}
		},
		hidden: {
			opacity: 0
		}
	};

	return (
		<motion.div
			className={styles.card}
			variants={variants}
			initial='hidden'
			animate='visible'
			layout
		>
			{children}
		</motion.div>
	);
};