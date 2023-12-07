import { IImageProps } from './ImageComponent.props';
// import styles from './Tag.module.css';
// import cn from 'classnames';
import smallWindowImg from '../../public/windowSmall.png';
import bigWindowImg from '../../public/windowBig.png';
import Image from 'next/image';

export const ImageComponent = ({ size = 's' }: IImageProps): JSX.Element => {
	return (
		<>
			{size === "s" &&
				<Image
					src={smallWindowImg}
					alt="Картинка окна браузера"
					width={330}
					height={200}
				/>}
			{size === "b" &&
				<Image
					src={bigWindowImg}
					alt="Картинка окна браузера"
					width={687}
					height={440}
				/>
			}
		</>

	);
}; 