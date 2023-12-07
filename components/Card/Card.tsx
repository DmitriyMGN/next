import { ImageComponent, Like, Paragraph, Tag, Time, Title, Dot } from '..';
import styles from './Card.module.css';

export const Card = (): JSX.Element => {
	return (
		<div className={styles.card}>
			<ImageComponent size='s' />
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
		</div>
	);
};