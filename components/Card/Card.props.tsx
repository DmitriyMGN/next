import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ICardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	card: {
		userId: number,
		id: number,
		title: string,
		body: string
	}
}