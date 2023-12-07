import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ILikeProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode
}