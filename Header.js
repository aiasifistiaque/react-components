import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isSmall, setIsSmall] = useState();
  const [isToggled, setIsToggled] = useState(false);
  useEffect(() => {
    const resize = () => setIsSmall(() => window.innerWidth < 900);
    window.addEventListener('resize', resize);
    resize();
  });

  return (
    <div className='header'>
      <a href='#' className='header-brand'>
        SAMC
      </a>
      {isSmall ? (
        <MenuToggle>
          <Items />
        </MenuToggle>
      ) : (
        <Items />
      )}
    </div>
  );
}

const Items = () => {
  return (
    <div className='header-item-container'>
      <Item to='#'>Home</Item>
      <Item to='#'>Our Work</Item>
      <Item to='#'>Team</Item>
      <Item to='#'>About</Item>
      <Item to='#'>Contact Us</Item>
      <button className='header-button'>DONATE</button>
    </div>
  );
};

const Item = props => {
  return (
    <a href={props.to} className='header-item'>
      {props.children}
    </a>
  );
};

const MenuToggle = props => {
  const [isToggled, setIsToggled] = useState(false);
  const title = props.title || 'MENU';

  return (
    <div>
      <a
        href='#'
        className='header-toggle-button'
        onClick={() => setIsToggled(!isToggled)}
      >
        {title}
        <img
          src='/menu.svg'
          style={{
            height: 15,
            width: 15,
            marginLeft: 10,
            marginRight: 10,
            color: 'white',
            opacity: 0.6,
          }}
        />
      </a>

      {isToggled ? props.children : null}
    </div>
  );
};
