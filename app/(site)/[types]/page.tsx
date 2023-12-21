'use client';

import { firstLevelMenu } from '@/helpers/helpers';
import { notFound } from 'next/navigation';
import { useAppDispatch } from '@/lib/hooks';
import { useEffect } from 'react';
import { setFirstCategory } from '@/lib/features/server-slice';

// export const metadata: Metadata = {
// 	title: 'About'
// };

export default function Types({ params }: { params: { types: string } }): JSX.Element {
	const categoryItem = firstLevelMenu.find(m => m.route == params.types);
	const dispatch = useAppDispatch();

	if (!categoryItem) {
		return notFound();
	}

	useEffect(() => {
		dispatch(setFirstCategory(categoryItem !== undefined ? categoryItem.id : null));
	});
	return (
		<div>
			Страничка типа {params.types}
		</div>
	);
}