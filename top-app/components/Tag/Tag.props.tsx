import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	children: ReactNode,
}