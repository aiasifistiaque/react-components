import React from 'react';
import { Style } from '../../functions';
export * from './FooterContainerStructure';
export * from './FooterItemStructure';

//Structures
export const Structure = props => {
	return (
		<div className={props.className || ''} style={Style(props)}>
			{props.children}
		</div>
	);
};

//Item Structure
export const ItemStructure = props => {
	if (props.link)
		return (
			<a
				href={props.link || '/'}
				className={props.className || ''}
				style={Style(props)}>
				{props.children}
			</a>
		);
	else
		return (
			<p className={props.className || ''} style={Style(props)}>
				{props.children}
			</p>
		);
};

//decor
export function FooterTopDecor(props) {
	const styleClass = 'footer-top-decor';
	return <Structure className={styleClass} {...props} />;
}
