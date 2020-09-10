import React from 'react';
import { useStyle } from '../../hooks';
import values from './values';
import { Structure } from './Structure';

const CardStructure = props => {
	const cardBorder = useStyle(props, values.cardBorder);
	const alignment = useStyle(props, values.alignment);
	const styleClass = `${cardBorder} ${alignment}`;
	return <Structure className={styleClass} {...props} />;
};

export const Card = props => {
	return <CardStructure {...props} />;
};

export const RoundedCard = props => {
	return <CardStructure {...props} rounded />;
};

export const ElevatedCard = props => {
	return <CardStructure {...props} elevated />;
};

export const BorderlessCard = props => {
	return <CardStructure {...props} borderless />;
};
