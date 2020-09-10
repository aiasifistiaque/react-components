import React from 'react';
import { Style } from '../../functions';
import { useStyle } from '../../hooks';

//Buttons
const ButtonStructure = props => {
	const buttonType = useStyle(props, values.buttonType);
	const buttonShape = useStyle(props, values.buttonShape);
	const buttonOutline = useStyle(props, values.buttonOutline);
	const buttonWidth = useStyle(props, values.buttonWidth);
	const buttonSize = useStyle(props, values.buttonSize);

	return (
		<a
			href={props.to || '#'}
			className={`${buttonType} ${buttonShape} ${buttonOutline} ${buttonWidth} ${buttonSize}`}
			style={Style(props)}>
			{props.children}
		</a>
	);
};

export const Button = props => {
	return <ButtonStructure {...props} />;
};

export const BigButton = props => {
	return <ButtonStructure {...props} large />;
};

export const SmallButton = props => {
	return <ButtonStructure {...props} small />;
};

export const OutlinedButton = props => {
	return <ButtonStructure {...props} outlined />;
};

export const TransparentButton = props => {
	return <ButtonStructure {...props} transparent />;
};

export const BlockButton = props => {
	return <ButtonStructure {...props} block />;
};

export const LinkButton = props => {
	return <ButtonStructure {...props} link />;
};

export const RoundButton = props => {
	return <ButtonStructure {...props} round />;
};

export const Fab = props => {
	return <ButtonStructure {...props} fab />;
};

const values = {
	buttonType: {
		default: 'btn',
		primary: 'btn-primary',
		secondary: 'btn-secondary',
		light: 'btn-light',
		transparent: 'btn-transparent',
		link: 'btn-link',
	},
	buttonOutline: {
		outlined: 'btn-outlined',
	},
	buttonWidth: {
		block: 'btn-block',
		full: 'btn-full',
	},
	buttonShape: {
		default: '',
		rounded: 'btn-rounded',
		round: 'btn-round',
		fab: 'fab',
	},
	buttonSize: {
		large: 'btn-large',
		small: 'btn-small',
	},
};
