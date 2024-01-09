import { IImageProps } from './ImageComponent.props';
import styles from './ImageComponent.module.css';
// import smallWindowImg from '../../public/windowSmall.png';
// import bigWindowImg from '../../public/windowBig.png';
import Image from 'next/image';

export const ImageComponent = ({ heightPx, widthPx, image }: IImageProps): JSX.Element => {

	return (
		<>
			<Image
				className={heightPx !== "100%" ? styles.imageSmall : styles.imageBig}
				src={image}
				alt="Картинка окна браузера"
				width={0}
				height={0}
				priority={true}
				style={{ width: `${widthPx}`, height: `${heightPx}` }}
			/>
		</>

	);
}; 