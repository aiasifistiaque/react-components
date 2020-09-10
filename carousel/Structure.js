import React, { useEffect, useState } from 'react';
import { useCarousal } from './useCarousal';
import { Style } from '../../functions';
import { useStyle } from '../../hooks';

export function Structure(props) {
	const timeout = props.timeout || 5000;
	const [imageNumber, setImageNumber] = useState(0);
	const image = useCarousal(props);

	const prev = () =>
		imageNumber == 0
			? setImageNumber(image.length - 1)
			: setImageNumber(imageNumber - 1);

	const next = () =>
		imageNumber == image.length - 1
			? setImageNumber(0)
			: setImageNumber(imageNumber + 1);

	useEffect(() => {
		const interval = setInterval(
			() => setImageNumber(imageNumber => (imageNumber + 1) % image.length),
			timeout
		);
		return () => clearInterval(interval);
	}, []);

	return (
		<div
			style={{
				backgroundImage: image.length > 1 ? image[imageNumber].image : null,
			}}
			className='carousel'>
			<a className='cr-button' onClick={prev}>
				prev
			</a>
			<div className='carousel-container'>
				{image[imageNumber].caption ? (
					<p className='car-caption'>{image[imageNumber].caption}</p>
				) : null}
				{image[imageNumber].subtitle ? (
					<p className='car-sub-title'>{image[imageNumber].subtitle}</p>
				) : null}
				{image[imageNumber].content ? (
					<p className='car-content'>{image[imageNumber].content}</p>
				) : null}
			</div>
			<p hidden>{props.children}</p>
			<a className='cr-button' onClick={next}>
				next
			</a>
		</div>
	);
}

export const CarousalImage = () => {
	return null;
};

export const ParentSlide = props => {};

export const Slide = props => {
	//const [image, setImage] = useState('');
	const [caption, setCaption] = useState('');
	const fullSlide = () => {};
	const image = {
		image: props.children[0].props.children,
		caption: props.children[1].props.children,
	};
	//console.log(image);
	return null;
};

export const SlideImage = props => {
	const image = props.children;
	return null;
};

export const SlideCaption = props => {
	const caption = props.children;
	return null;
};

export const SlideTitle = props => {
	const caption = props.children;
	return null;
};

export const SlideSubTitle = props => {
	const caption = props.children;
	return null;
};

export const SlideContent = props => {
	const caption = props.children;
	return null;
};
