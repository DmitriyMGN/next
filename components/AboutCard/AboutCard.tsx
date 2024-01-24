import { Dot, ImageComponent, Like, Paragraph, Tag, Title, Comment } from '..';
import styles from './AboutCard.module.css';
import { IAboutCardProps } from './AboutCard.props';
import windowBig from '@/public/windowBig.png';


export const AboutCard = ({ card, comments, ...props }: IAboutCardProps): JSX.Element => {
	return (
		<div className={styles.aboutCard} {...props}>
			<div className={styles.titleContainer}>
				<Title tag="h1">{card.title}</Title>
			</div>
			<div className={styles.tagContainer}>
				<Tag>Front-end</Tag>
				<Dot />
				<Paragraph defaultStyles={true}>1 месяц назад</Paragraph>
				<Dot />
				<Paragraph defaultStyles={true}>3 минуты</Paragraph>
				<Dot />
				<Like>3</Like>
			</div>
			<div className={styles.imageContainer}>
				<ImageComponent image={windowBig} heightPx={"100%"} widthPx={"100%"} />
			</div>
			<div className={styles.bodyContainer}>
				<div className={styles.paragraphContainer}>
					<Paragraph defaultStyles={true}>{card.body}</Paragraph>
					<Paragraph defaultStyles={true}>{card.body}</Paragraph>
					<Paragraph defaultStyles={true}>{card.body}</Paragraph>
				</div>
			</div>
			<div className={styles.aboutContainer}>
				<Title tag="h2">{card.title}</Title>
				<div className={styles.paragraphContainer}>
					<Paragraph defaultStyles={true}>{card.body}</Paragraph>
					<Paragraph defaultStyles={true}>{card.body}</Paragraph>
					<Paragraph defaultStyles={true}>{card.body}</Paragraph>
				</div>
			</div>
			<div className={styles.likeContainer}>
				<Like>Понравилось? Жми</Like>
			</div>
			<Title tag="h2">Комментарии</Title>
			<Comment comments={comments} cardId={card.id} />
		</div>
	);
};