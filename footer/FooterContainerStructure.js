import React from 'react';
import { useStyle } from '../../hooks';
import { Structure } from './Structure';

//Containers
export function Footer(props) {
	const styleClass = 'footer';
	return <Structure className={styleClass} {...props} />;
}

export function FooterContainer(props) {
	const containerDirection = useStyle(props, values.containerDirection);
	const styleClass = `${containerDirection}`;
	return <Structure className={styleClass} {...props} />;
}

export function FooterContainerHorizontal(props) {
	return <FooterContainer {...props} horizontal />;
}

export function FooterContainerVertical(props) {
	return <FooterContainer {...props} vertical />;
}
