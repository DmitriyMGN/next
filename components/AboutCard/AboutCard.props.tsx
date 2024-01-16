import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IAboutCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	card: {
		userId: number,
		id: number,
		title: string,
		body: string
	},
	comments: {
		postId: number
		id: number;
		name: string;
		email: string;
		body: string;
	}[]
}