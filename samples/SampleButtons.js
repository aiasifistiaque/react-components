import React from 'react';
import { Vertical, Button, BigButton, SmallButton, Fab } from '../';

export default function SampleButtons() {
	return (
		<Vertical fluid center style={{ backgroundColor: 'whitesmoke' }}>
			<p>Button</p>
			<Button>click me</Button>
			<Button>this the same button as above with slightly longer text</Button>
			<Button rounded>rounded button</Button>
			<Button primary outlined rounded>
				outlined button
			</Button>
			<Button secondary outlined rounded>
				outlined button
			</Button>
			<Button round>round button</Button>
			<Button transparent rounded>
				transparent button
			</Button>
			<BigButton rounded>large button</BigButton>
			<Button rounded>normal button</Button>
			<SmallButton rounded>small button</SmallButton>
			<Button link>link button</Button>
			<Button primary>primary</Button>
			<Button primary block>
				primary block
			</Button>
			<Button secondary block rounded>
				primary block
			</Button>
			<Button secondary>secondary</Button>
			<Button light>light</Button>
			<Button primary fab>
				F
			</Button>
			<Fab outlined secondary>
				B
			</Fab>
			<br />
		</Vertical>
	);
}
