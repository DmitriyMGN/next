import { getPosts } from '@/api/api';
import { Card } from '@/components';
import { AnimateCard } from '@/components/AnimateCard/AnimateCard';

interface ICard {
	id: number;
	userId: number;
	title: string;
	body: string;
}

export default async function Home(): Promise<JSX.Element> {

	const getPosts = async () => {
		const result = await fetch('https://jsonplaceholder.typicode.com/posts')
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
				return Promise.reject(`Ошибка: ${res.status}`);
			})
			.then((data) => {
				return data;
			});

		return result;
	};

	const dataPosts = await getPosts();


	return (
		<>
			{dataPosts.slice(0, 10).map((post: ICard) => {
				return (
					<AnimateCard>
						<Card key={post.id} card={post} />
					</AnimateCard>
				);

interface ICard {
	id: number;
	userId: number;
	title: string;
	body: string;
}

export default async function Home(): Promise<JSX.Element> {

	const dataPosts = await getPosts();

	return (
		<>
			{dataPosts.slice(0, 10).map((post: ICard) => {
				return <Card key={post.id} card={post} />;
			})
			}
		</>
	);
}
