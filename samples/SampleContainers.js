import React from 'react';
import { Container, Content } from '../index';

export default function SampleContainers() {
	return (
		<Container>
			<Container style={{ backgroundColor: 'red' }}>
				<Content>Componet: container, prop: none</Content>
			</Container>
			<Container center style={{ backgroundColor: 'tomato' }}>
				<Content>Conponent: container, prop: center</Content>
			</Container>
			<Container right style={{ backgroundColor: 'crimson' }}>
				<Content>tComponet: container, prop: right</Content>
			</Container>
			<Container left style={{ backgroundColor: 'teal' }}>
				<Content>Componet: container, prop: left</Content>
			</Container>
			<Container horizontal center style={{ backgroundColor: 'gray' }}>
				<Content>Component: container</Content>
				<Content>prop: horizontal, center</Content>
			</Container>
			<Container right vertical style={{ backgroundColor: 'lavender' }}>
				<Content>Component: container</Content>
				<Content>prop: vertical, right</Content>
			</Container>
			<Container full center style={{ backgroundColor: 'tomato' }}>
				<Content>Component: container</Content>
				<Content>prop: vertical, full</Content>
			</Container>
		</Container>
	);
}
