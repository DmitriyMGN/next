export default async function Post({ params }: { params: { id: number } }): Promise<JSX.Element> {
	const getPost = async () => {
		const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
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

	const post = await getPost();

	return (
		<div>
			<span>{post.title}</span>
			<div>
				<span>{post.body}</span>
			</div>

		</div>
	);
}
