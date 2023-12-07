import { ImageComponent, Like, Paragraph, Tag, Time, Title } from '..';
import styles from './Card.module.css';

export const Card = (): JSX.Element => {
	return (
		<div className={styles.card}>
			<Tag>Ghost</Tag>
			<ImageComponent size='s' />
			<ImageComponent size='b' />
			<Time>FFF</Time>
			<Like>1</Like>
			<Title tag="h3">12</Title>
			<Paragraph size='s'>hgfhfhfghfgh</Paragraph>
		</div>
	);
};