import React from 'react';
import * as styles from '../../functions';
import { useStyle } from '../../hooks';
export { Title, SubTitle } from './HeadingStructure';

//Texts
const TextStructure = props => {
	const fontSize = useStyle(props, values.fontSize);
	const fontWeight = useStyle(props, values.fontWeight);

	return (
		<div
			className={`text ${fontSize} ${fontWeight} dark`}
			style={styles.Style(props)}>
			{props.children}
		</div>
	);
};

//LinkText
const LinkStructure = props => {
	const fontSize = useStyle(props, values.fontSize);
	const fontWeight = useStyle(props, values.fontWeight);

	return (
		<div
			onClick={props.onClick}
			className={`text ${fontSize} ${fontWeight} dark clickable`}
			style={styles.Style(props)}>
			{props.children}
		</div>
	);
};

/**
 * basic content text
 * @param {extraSmall} extra small text
 * @param {small} small text
 * @param {medium} medium text
 * @param {large} heading small
 * @param {xLarge} heading medium
 * @param {xxLarge} heading large
 * @param {bold} bold text
 */
export const Content = props => {
	return <TextStructure {...props} />;
};

/**
 * header with xxLarge and text
 */
export const Header = props => {
	return <TextStructure {...props} xxLarge bold />;
};

/**
 * basic text//same as Content
 */
export const Text = props => {
	return <TextStructure {...props} />;
};

/**
 * larger text with regular font weight
 */
export const LargeText = props => {
	return <TextStructure {...props} large />;
};

/**
 * smaller text
 */
export const SmallText = props => {
	return <TextStructure {...props} small />;
};

/**
 * normal text with bold
 */
export const BoldText = props => {
	return <TextStructure {...props} bold />;
};

/**
 * basic content able to be clicked
 */
export const Clickable = props => {
	return <LinkStructure {...props} />;
};

const values = {
	fontSize: {
		extraSmall: 'text-extra-small',
		small: 'text-small',
		medium: 'text-medium',
		large: 'text-large',
		xLarge: 'text-xlarge',
		xxLarge: 'text-xxlarge',
		default: 'text-medium',
		title: 'h-1',
	},
	fontWeight: {
		bold: 'font-bold',
		default: 'font-normal',
	},
};
