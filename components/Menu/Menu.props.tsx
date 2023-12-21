import { MenuItem } from '@/interfaces/menu.interface';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IMenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	menu: MenuItem[],
	firstCategory: number
}