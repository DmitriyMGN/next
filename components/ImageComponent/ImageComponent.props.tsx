import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

export interface IImageProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
	image: {
		blurDataURL?: string,
		blurHeight?: number,
		blurWidth?: number,
		height: number,
		src: string,
		width: number
	},
	heightPx: number,
	widthPx: number,
}