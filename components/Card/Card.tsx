import { ImageComponent, Like, Paragraph, Tag, Time, Title, Dot } from '..';
import Link from 'next/link';
import styles from './Card.module.css';
import ArrowImg from '../../public/arrow.svg';
import smallWindowImg from '../../public/windowSmall.png';
import { ICardProps } from './Card.props';



export const Card = ({ card }: ICardProps): JSX.Element => {
	return (
		<>

			<div
				className={styles.card}
			>
				<ImageComponent widthPx={"330px"} heightPx={"200px"} image={smallWindowImg} />
				<div className={styles.aboutContainer}>
					<div className={styles.tagContainer}>
						<Tag>Front-end</Tag>
						<Dot />
						<Time>1 месяц назад</Time>
					</div>
					<Like>4</Like>
				</div>
				<Title tag="h3">{card.title}</Title>
				<div className={styles.paragraphContainer}>
					<Paragraph size='s'>{card.body}</Paragraph>
				</div>
				<div className={styles.bottomContainer}>
					<Time>3 минуты</Time>
					<Link href={`http://localhost:3000/posts/${card.id}`} className={styles.link}>
						Читать
						<ArrowImg />
					</Link>
				</div>

export const Card = ({ card }: ICardProps): JSX.Element => {
	return (
		<div className={styles.card}>
			<ImageComponent widthPx={"330px"} heightPx={"200px"} image={smallWindowImg} />
			<div className={styles.aboutContainer}>
				<div className={styles.tagContainer}>
					<Tag>Front-end</Tag>
					<Dot />
					<Time>1 месяц назад</Time>
				</div>
				<Like>4</Like>
			</div>
			<Title tag="h3">{card.title}</Title>
			<div className={styles.paragraphContainer}>
				<Paragraph size='s'>{card.body}</Paragraph>
			</div>
			<div className={styles.bottomContainer}>
				<Time>3 минуты</Time>
				<Link href={`http://localhost:3000/posts/${card.id}`} className={styles.link}>
					Читать
					<ArrowImg />
				</Link>

			</div>

		</>
	);
};