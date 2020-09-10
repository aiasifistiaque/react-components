import React from 'react';
import * as styles from '../../functions';

export const Title = props => {
	return (
		<div className='h-1 dark' style={styles.Style(props)}>
			{props.children.toUpperCase()}
		</div>
	);
};

export const SubTitle = props => {
	return (
		<div className='h-2 dark' style={styles.Style(props)}>
			{props.children.toUpperCase()}
		</div>
	);
};
