import React, { useEffect, useState } from 'react';

const SimpleCarousel = () => {
	const image = [
		{ image: `url('/wp-4.jpg')`, caption: ' cover one' },
		{ image: `url('/wp-5.jpg')`, caption: 'cover two' },
		{ image: `url('/wp-6.jpeg')`, caption: 'cover three' },
	];
	const length = image.length;
	const [imageNumber, setImageNumber] = useState(0);

	useEffect(() => {
		const interval = setInterval(
			() => setImageNumber(imageNumber => (imageNumber + 1) % length),
			5000
		);
		return () => clearInterval(interval);
	}, []);

	return (
		<div
			style={{ backgroundImage: image[imageNumber].image }}
			className='carousel'>
			<button
				className='cr-button'
				onClick={() =>
					imageNumber == 0
						? setImageNumber(image.length - 1)
						: setImageNumber(imageNumber - 1)
				}>
				prev
			</button>
			<p className='caption'>{image[imageNumber].caption}</p>
			<button
				className='cr-button'
				onClick={() =>
					imageNumber == image.length - 1
						? setImageNumber(0)
						: setImageNumber(imageNumber + 1)
				}>
				next
			</button>
		</div>
	);
};

export default SimpleCarousel;
