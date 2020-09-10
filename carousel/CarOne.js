import React from 'react';
import {
	Structure as Carousal,
	Slide,
	SlideImage,
	SlideCaption,
	SlideTitle,
	SlideSubTitle,
	slideContent,
	SlideContent,
} from './Structure';
import { Content } from '../';

export default function CarOne() {
	return (
		<Carousal>
			<Slide>
				<SlideImage src={`url('/wp-4.jpg')`} />
				<SlideCaption>Slide one</SlideCaption>
				<SlideSubTitle>Subtitle of first slide</SlideSubTitle>
				<SlideContent>
					Nulla vitae elit libero, a pharetra augue mollis interdum.
				</SlideContent>
			</Slide>
			<Slide>
				<SlideImage src={`url('/wp-5.jpg')`} />
				<SlideCaption>slide two</SlideCaption>
				<SlideContent>
					two Nulla vitae elit libero, a pharetra augue mollis interdum.
				</SlideContent>
			</Slide>
			<Slide>
				<SlideImage src={`url('/wp-6.jpeg')`} />
				<SlideCaption>Slide three</SlideCaption>
				<SlideSubTitle>Title of slide two</SlideSubTitle>
			</Slide>
		</Carousal>
	);
}
