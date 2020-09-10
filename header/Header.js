import React from 'react';
import { ItemContainer, Item, HeaderButton, CustomHeader } from './Structure';

export default function Header(props) {
  const customStyle = `{color: ${props.bg}}`;
  return (
    <CustomHeader brand='SAMC' bg={props.bg}>
      <ItemContainer>
        <Item to='/'>Home</Item>
        <Item to='#'>Our Work</Item>
        <Item to='#'>Team</Item>
        <Item to='#'>About</Item>
        <Item to='#'>Contact Us</Item>
        <HeaderButton to='/donate'>DONATE</HeaderButton>
      </ItemContainer>
    </CustomHeader>
  );
}
