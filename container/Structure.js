import React from 'react';
import { Style } from '../../functions';
import { useStyle } from '../../hooks';

//Basic Container Strucrure
const ContainerStructure = props => {
	const containerType = useStyle(props, values.containerType);
	const allignment = useStyle(props, values.alignment);
	const fluid = useStyle(props, values.fluid);
	const containerVisibility = useStyle(props, values.containerVisibility);

	return (
		<div
			className={`${containerType} ${allignment} ${fluid} ${containerVisibility}`}
			style={Style(props)}>
			{props.children}
		</div>
	);
};

/**
 * this is a basic container
 */
export const Container = props => {
	return <ContainerStructure {...props} />;
};

/**
 * this is a container with vertical allignment
 */
export const Vertical = props => {
	return <ContainerStructure {...props} vertical />;
};

/**
 * this is a container with horizontal allignment
 */
export const Horizontal = props => {
	return <ContainerStructure {...props} horizontal />;
};

/**
 * container with padding around the border
 */
export const FluidContainer = props => {
	return <ContainerStructure {...props} fluid />;
};

/**
 * container with transparent background
 */
export const TransparentContainer = props => {
	return <ContainerStructure {...props} transparent />;
};

/**
 * container that covers full viewport
 */
export const FullContainer = props => {
	return <ContainerStructure {...props} full />;
};

/**
 *  container which holds the cards horizontally
 */
export const CardContainer = props => {
	return <ContainerStructure {...props} horizontal />;
};

const values = {
	alignment: {
		center: 'center',
		right: 'right',
		left: 'left',
		default: 'left',
	},
	containerType: {
		horizontal: 'container-horizontal',
		vertical: 'container-vertical',
		default: 'container-vertical',
		full: 'container-full',
	},
	fluid: {
		fluid: 'fluid',
	},
	containerVisibility: {
		transparent: 'transparent',
	},
};
