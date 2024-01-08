import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	children: ReactNode,
	size?: 'b' | 'm' | 's',
	default1?: boolean
}