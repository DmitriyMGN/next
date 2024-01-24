interface ICard {
	id: number;
	userId: number;
	title: string;
	body: string;
}

const getPost = async (id: number) => {
	const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
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

export async function generateStaticParams() {
	const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json());

	return posts.map((post: ICard) => ({
		id: post.id.toString(),
	}));
}


export default async function Post({ params }: { params: { id: number } }): Promise<JSX.Element> {

	const post = await getPost(params.id);

	return (
		<div>
			<span>{post.title}</span>
			<div>
				<span>{post.body}</span>
			</div>

		</div>
	);
}
