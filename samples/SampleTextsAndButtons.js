import React from 'react';
import {
	Container,
	Content,
	Vertical,
	Title,
	SubTitle,
	Text,
	Horizontal,
} from '../';

export default function SampleTextsAndButtons() {
	return (
		<Container
			full
			style={{ backgroundColor: 'limegreen', flexDirection: 'column' }}>
			<Content>Component: container</Content>
			<Content>prop: vertical, full</Content>
			<Vertical fluid center style={{ backgroundColor: 'whitesmoke' }}>
				Component: vertical
				<Title>Conoponent: title</Title>
				<SubTitle>Component: Sub title</SubTitle>
				<Text xxLarge>Text xxLarge</Text>
				<Text xxLarge bold>
					Text xxLarge bold
				</Text>
				<Text xLarge>Text xLarge</Text>
				<Text large>Text large</Text>
				<Text medium>Text medium</Text>
				<Text medium bold>
					Text medium bold
				</Text>
				<Text small>Text small</Text>
				<Text extraSmall>Text extraSmall</Text>
				<Text extraSmall bold>
					Text extraSmall bold
				</Text>
				<br />
			</Vertical>
			horizontal box below
			<Horizontal center style={{ backgroundColor: 'blue' }}>
				<Vertical style={{ backgroundColor: 'tomato' }}>
					Component: vertical Component: vertical, props: center Component:
					vertical, props: center
				</Vertical>
				<Vertical center style={{ backgroundColor: 'crimson' }}>
					Component: vertical, props: center Component: vertical, props: center
					Component: vertical, props: center
				</Vertical>
			</Horizontal>
		</Container>
	);
}
