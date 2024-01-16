import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface IAnimateCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode,
}