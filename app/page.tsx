import { getPosts } from '@/api/api';
import { Card } from '@/components';

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
