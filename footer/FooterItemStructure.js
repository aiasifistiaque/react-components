import React from 'react';
import { useStyle } from '../../hooks';
import { ItemStructure } from './Structure';
import values from './values';

//items
export function FooterItem(props) {
	const itemType = useStyle(props, values.itemType);
	const styleClass = `${itemType}`;
	return <ItemStructure className={styleClass} {...props} />;
}

export function FooterBrand(props) {
	return <FooterItem {...props} brand />;
}

export function FooterItemTitle(props) {
	return <FooterItem {...props} title />;
}

export function FooterLink(props) {
	return <FooterItem {...props} link />;
}

export function FooterIcon({ source }) {
	const src = `/${source}.svg`;
	return <img src={src} className='footer-icon' style={{ opacity: 1 }} />;
}

export function FooterIconItem(props) {
	return (
		<p className='footer-item'>
			{props.icon ? <FooterIcon source={props.icon} /> : null}
			{props.children}
		</p>
	);
}
