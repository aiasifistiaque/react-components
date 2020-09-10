import React from 'react';
import { ItemContainer, Item, HeaderButton, HeroHeader } from './Structure';

export default function Header(props) {
  return (
    <HeroHeader brand='SAMC'>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <ItemContainer>
          <Item to='/'>Home</Item>
          <Item to='#'>Our Work</Item>
          <Item to='#'>Team</Item>
          <Item to='#'>About</Item>
          <Item to='#'>Contact Us</Item>
          <HeaderButton to='/donate'>DONATE</HeaderButton>
        </ItemContainer>
      </div>
    </HeroHeader>
  );
}
