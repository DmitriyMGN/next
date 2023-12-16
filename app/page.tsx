// import styles from './page.module.css';
'use client'

import { Button, Htag, P, Tag, Rating } from '@/components';
import { useState } from 'react';

export default function Home(): JSX.Element {
	const [rating, setRating] = useState<number>(4);

	return (
		<>
			<Htag tag='h1' className='dsad'>Текст</Htag>
			<Button appearance='primary' className='dsad' arrow='down'>Текст</Button>
			<Button appearance='ghost' arrow='right'>Текстsssssssssssss</Button>
			<P size='m'>Маленький</P>
			<P>Средний</P>
			<P size='b'>Большой</P>
			<Tag size='b'>Ghost</Tag>
			<Tag size='s' color='red'>Red</Tag>
			<Tag size='s' color='primary'>Primary</Tag>
			<Tag size='s' color='gray'>Gray</Tag>
			<Tag size='b' color='green' href="www.ya.ru">Green</Tag>
			<Rating rating={rating} isEditable={true} setRating={setRating} />
		</>
	);
}
