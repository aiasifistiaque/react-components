import React from 'react';
import {
	CardContainer,
	Card,
	CardTitle,
	CardText,
	CardImage,
	ImageCard,
	CardSeperator,
	CardBody,
	CardImageTitle,
} from '../';
import { Button } from '..';
import { CardImageText } from './Structure';

export default function Cards() {
	return (
		<CardContainer style={{ background: 'transparent', color: 'crimson' }}>
			<Card>
				<CardBody>
					<CardTitle>Index</CardTitle>
					<CardText>there are some dummy content lol</CardText>
					<CardText>there are some dummy content </CardText>
					<CardSeperator />
					<CardText>there are some dummy content </CardText>
					<CardSeperator />
					<CardText>there are some dummy content </CardText>
					<CardSeperator />
					<CardText>there are some dummy </CardText>
					<CardSeperator />
					<CardText>there are some dummy content </CardText>
					<br />
					<Button block bg='slateblue' color='lavender'>
						go to the link
					</Button>
				</CardBody>
			</Card>
			<Card transparent>
				<CardBody>
					<CardTitle>there are some dummy content lol</CardTitle>
				</CardBody>
				<CardImage src='/background-cover.jpg' />
				<CardBody style={{ paddingTop: 5 }}>
					<CardTitle>Index</CardTitle>
					<CardText>there are some dummy content lol</CardText>
				</CardBody>
			</Card>

			<ImageCard>
				<CardBody>
					<CardImageTitle>Index</CardImageTitle>
					<CardImageText>there are some dummy content lol</CardImageText>
				</CardBody>
			</ImageCard>
			<Card>
				<CardTitle>Index</CardTitle>
				<CardText>there are some dummy content lol</CardText>
			</Card>
			<Card>
				<CardImage src='/background-cover.jpg' />
				<CardTitle>Index</CardTitle>
				<CardText style={{ color: 'tomato' }}>
					there are some dummy content lol
				</CardText>
			</Card>
		</CardContainer>
	);
}
