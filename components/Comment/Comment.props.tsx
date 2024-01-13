import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ICommentProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	comments: {
		postId: number
		id: number;
		name: string;
		email: string;
		body: string;
	}[],
	cardId: number
}