'use client';

import { ISearchProps } from './Search.props';
import styles from './Search.module.css';
import cn from 'classnames';
import { Button, Input } from '..';
import { useState, KeyboardEvent } from 'react';
import GlassIcon from '@/public/glass.svg';
import { useRouter } from 'next/navigation';

const Search = ({ className, ...props }: ISearchProps): JSX.Element => {
	const [search, setSearch] = useState<string>('');
	const router = useRouter();

	const goToSearch = () => {
		router.push(`/search?q=${search}`);
	};

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			goToSearch();
		}
	};

	return (
		<div className={cn(className, styles.search)} {...props}>
			<Input
				className={styles.input}
				placeholder='Поиск...'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				onKeyDown={handleKeyDown}

			/>
			<Button
				appearance='primary'
				className={styles.button}
				onClick={goToSearch}
			>
				<GlassIcon />
			</Button>

		</div>
	);
};

export default Search;