import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

export interface IImageProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
	size: 'b' | 's',
}