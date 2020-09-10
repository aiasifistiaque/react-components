import React from 'react';
import { Container, Title, SubTitle, Button, Content } from './Structure';

export default function Donation() {
  return (
    <Container>
      <SubTitle color='limegreen'>With your help</SubTitle>
      <Title>We can save lives</Title>
      <Content>
        Your donations make our work possible. Because <br />
        of you, our work can continue.
      </Content>
      <Button to='/donate'>donate</Button>
    </Container>
  );
}
