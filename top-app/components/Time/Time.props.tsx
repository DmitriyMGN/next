import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ITimeProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	children: ReactNode
}