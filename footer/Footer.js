import React from 'react';
import {
	FooterContainerHorizontal as Horizontal,
	FooterContainerVertical as Vertical,
	FooterIconItem as Item,
	Footer as Container,
	FooterItemTitle as ItemTitle,
	FooterTopDecor as TopDecor,
} from './Structure';

export default function footer() {
	return (
		<Container>
			<TopDecor />
			<Horizontal>
				<Vertical>
					<ItemTitle>
						Suraiya Ataur Medical <br /> Centre (SAMC)
					</ItemTitle>
					<Item>Chondipur, Bangladesh</Item>
					<Item icon='phone-color'>+1 206-276-0024</Item>
					<Item icon='mail'>samcbangladesh@gmail.com</Item>
				</Vertical>
				<Vertical>
					<ItemTitle>Events</ItemTitle>
					<Item>Donate</Item>
					<Item>Present Events</Item>
					<Item>Upcoming Events</Item>
				</Vertical>
				<Vertical>
					<ItemTitle>About Us</ItemTitle>
					<Item>Who Are We</Item>
					<Item>What We Do</Item>
					<Item>Our Team</Item>
					<Item>Message From The Founder</Item>
				</Vertical>
				<Vertical>
					<ItemTitle>Social Media</ItemTitle>
					<Item icon='facebook'>Facebook</Item>
					<Item icon='instagram'>Instagram</Item>
					<Item icon='twitter'>Twitter</Item>
				</Vertical>
				<Vertical>
					<ItemTitle>Useful Links</ItemTitle>
					<Item>DGHS</Item>
					<Item>Health Ministry</Item>
					<Item>Directorate General of Health Services</Item>
				</Vertical>
			</Horizontal>
			<Horizontal>
				<Item>
					Copyright © 2020, Suraiya Ataur Medical Center(SAMC) | All rights
					reserved.
				</Item>
			</Horizontal>
		</Container>
	);
}
