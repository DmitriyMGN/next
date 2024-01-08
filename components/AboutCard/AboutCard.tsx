import { Dot, Like, Paragraph, Tag, Title } from '..';
import styles from './AboutCard.module.css';
import { IAboutCardProps } from './AboutCard.props';

export const AboutCard = ({ card, ...props }: IAboutCardProps): JSX.Element => {
	return (
		<div className={styles.aboutCard} {...props}>
			<div className={styles.aboutCard__titleContainer}>
				<Title tag="h1">{card.title}</Title>
			</div>
			<div className={styles.aboutCard__tagContainer}>
				<Tag>Frontend</Tag>
				<Dot />
				<Paragraph>1 месяц назад</Paragraph>
				<Dot />
				<Paragraph>3 минуты</Paragraph>
				<Dot />
				<Like>3</Like>
			</div>

		</div>
	);
};