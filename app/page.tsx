// import styles from './page.module.css';
import { Button, Htag, P, Tag, Rating } from '@/components';
// import { useState } from 'react';

async function getMenu(firstCategory: number) {
	const result = fetch('https://courses-top.ru/api/top-page/find', {
		method: "POST",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			'firstCategory': firstCategory
		}),
	})
		.then((res) => {
			if (res.ok) {
				return res.json();
			}
			return Promise.reject(`Ошибка: ${res.status}`);
		});

	return result;
}

async function getPage(alias: string) {
	const result = fetch(`https://courses-top.ru/api/top-page/byAlias/${alias}`, {
		method: "GET",
		headers: {
			'Content-Type': 'application/json'
		}
	})
		.then((res) => {
			if (res.ok) {
				return res.json();
			}
			return Promise.reject(`Ошибка: ${res.status}`);
		});

	return result;
}

async function getProduct() {
	const result = fetch("https://courses-top.ru/api/product/find", {
		method: "POST",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			"category": "Photoshop",
			"limit": 10
		}),
	})
		.then((res) => {
			if (res.ok) {
				return res.json();
			}
			return Promise.reject(`Ошибка: ${res.status}`);
		});
	return result;
}





export default async function Home() {
	const menu = await getMenu(0);
	const page = await getPage('photoshop');
	const product = await getProduct();

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
			{/* <Rating rating={rating} isEditable={true} setRating={() = console.log(0))} /> */}
			<div>{menu.length}</div>
			<div>{page.alias}</div>
			<div>{product[0].title}</div>
		</>
	);
}
