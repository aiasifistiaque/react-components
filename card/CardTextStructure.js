import React from 'react';
import { Style } from '../../functions';
import { useStyle } from '../../hooks';
import values from './values';

const TextStructure = props => {
	const cardTextType = useStyle(props, values.cardTextType);
	const styleClass = cardTextType;
	return (
		<p className={styleClass} style={Style(props)}>
			{props.children}
		</p>
	);
};

export const CardTitle = props => {
	return <TextStructure {...props} title />;
};

export const CardSubTitle = props => {
	return <TextStructure {...props} subtitle />;
};

export const CardText = props => {
	return <TextStructure {...props} />;
};

export const CardImageTitle = props => {
	const styleClass = 'card-title text-shadow';
	return <TextStructure className={styleClass} {...props} />;
};

export const CardImageText = props => {
	const styleClass = 'card-text text-shadow';
	return <TextStructure className={styleClass} {...props} />;
};
