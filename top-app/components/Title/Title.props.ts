import { DetailedHTMLProps, ReactNode, HTMLAttributes } from 'react';

export interface ITitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLTitleElement>, HTMLTitleElement> {
	tag: 'h1' | 'h2' | 'h3';
	children: ReactNode;
}