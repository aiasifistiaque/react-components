import React from 'react';
import { Style } from '../../functions';
import { useStyle } from '../../hooks';
import values from './values';
export * from './CardTextStructure';
export * from './CardTypeStructure';

export const Structure = props => {
	return (
		<div className={props.className || ''} style={Style(props)}>
			{props.children}
		</div>
	);
};

//card body structure
export const CardImage = props => {
	return (
		<img
			className='card-image'
			src={`/${props.src}.jpg`}
			style={Style(props)}
		/>
	);
};

export const CardBody = props => {
	const textAlignment = useStyle(props, values.textAlignment);
	const styleClass = `card-body ${textAlignment}`;
	return <Structure className={styleClass} {...props} />;
};

export const CardHeader = props => {
	const textAlignment = useStyle(props, values.textAlignment);
	const styleClass = `card-header ${textAlignment}`;
	return <Structure className={styleClass} {...props} />;
};

export const CardFooter = props => {
	const textAlignment = useStyle(props, values.textAlignment);
	const styleClass = `card-footer ${textAlignment}`;
	return <Structure className={styleClass} {...props} />;
};

export const CardSeperator = props => {
	return <hr className='card-seperator' style={Style(props)} />;
};

export const ImageCard = props => {
	const customClass = props.elevated ? 'card-elevated' : 'image-card';
	const styleClass = `${customClass}`;
	return <Structure className={styleClass} {...props} />;
};
