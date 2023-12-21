import { ImageComponent, Like, Paragraph, Tag, Time, Title, Dot } from '..';
import Link from 'next/link';
import styles from './Card.module.scss';
import ArrowImg from '../../public/arrow.svg';
import smallWindowImg from '../../public/windowSmall.png';

export const Card = (): JSX.Element => {
	return (
		<div className={styles.card}>
			<ImageComponent widthPx={330} heightPx={200} image={smallWindowImg} />
			<div className={styles.aboutContainer}>
				<div className={styles.tagContainer}>
					<Tag>Front-end</Tag>
					<Dot />
					<Time>1 месяц назад</Time>
				</div>
				<Like>4</Like>
			</div>
			<Title tag="h3">Как работать с CSS Grid</Title>
			<Paragraph size='s'>Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..</Paragraph>
			<div className={styles.bottomContainer}>
				<Time>3 минуты</Time>
				<Link href="#" className={styles.link}>
					Читать
					<ArrowImg />
				</Link>
			</div>
		</div>
	);
};