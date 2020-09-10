import React from 'react';
import {
  Container,
  Left,
  Right,
  Item,
  Button,
  SocialMediaButton,
  ButtonContainer,
} from './Structure';
import Seperator from '../Seperator';

export default function Newsletter() {
  return (
    <Container>
      <Left>
        <Item>
          Subscribe to our Newsletter and get exclusive updates on our work
        </Item>
        <Button>Subscribe</Button>
      </Left>
      <Seperator color='whitesmoke' />
      <Right>
        <Item>Think people should hear about this? Share it.</Item>
        <ButtonContainer>
          <SocialMediaButton>f</SocialMediaButton>
          <SocialMediaButton>g</SocialMediaButton>
          <SocialMediaButton>twit</SocialMediaButton>
        </ButtonContainer>
      </Right>
    </Container>
  );
}
