import React from 'react';
import {
	CardContainer,
	CardTitle,
	CardSeperator,
	CardBody,
	CardSubTitle,
	Card,
	CardFooter,
	CardHeader,
	CardImage,
	CardText,
	Button,
	RoundedCard,
} from '../';

export default function SampleCards() {
	return (
		<CardContainer style={{ backgroundColor: 'whitesmoke' }}>
			<Card>
				<CardImage src='background-cover' />
				<CardBody center>
					<CardTitle>card one</CardTitle>
					<CardText>contents</CardText>
					<CardSeperator />
					<CardText>contents</CardText>
					<Button
						rounded
						style={{ backgroundColor: 'crimson', borderColor: 'crimson' }}>
						click me
					</Button>
				</CardBody>
				<CardFooter>this is the footer</CardFooter>
			</Card>
			<RoundedCard>
				<CardImage src='background-cover' />
				<CardBody>
					<CardTitle>Card Title</CardTitle>
					<CardSubTitle>Subtitle</CardSubTitle>
					<CardText>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</CardText>
					<Button block rounded secondary>
						Go to the link
					</Button>
				</CardBody>
				<CardFooter>this is the footer</CardFooter>
			</RoundedCard>
			<RoundedCard>
				<CardImage src='background-cover' />
				<CardBody>
					<CardTitle>card one</CardTitle>
					<CardText>contents</CardText>
					<CardText>contents</CardText>
					<CardText>contents</CardText>
				</CardBody>
			</RoundedCard>
			<RoundedCard>
				<CardHeader center>Header Card</CardHeader>
				<CardBody center>
					<CardTitle>card one</CardTitle>
					<CardText>contents</CardText>
				</CardBody>
				<CardFooter center>footer of the card</CardFooter>
			</RoundedCard>
			<Card elevated>
				<CardBody>
					<CardTitle>card one</CardTitle>
					<CardText>contents</CardText>
				</CardBody>
			</Card>
			<Card rounded>
				<CardBody>
					<CardText>just some list</CardText>
					<CardSeperator />
					<CardText>to show</CardText>
					<CardSeperator />
					<CardText>it works</CardText>
				</CardBody>
			</Card>
			<Card rounded>
				<CardBody>
					<CardTitle>Special title treatment</CardTitle>
					<CardText>
						With supporting text below as a natural lead-in to additional
						content.
					</CardText>
					<Button
						rounded
						style={{ backgroundColor: 'crimson', borderColor: 'crimson' }}>
						Go somewhere
					</Button>
				</CardBody>
			</Card>
		</CardContainer>
	);
}
