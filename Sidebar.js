import React, { useState, useEffect } from 'react';

export default function Sidebar() {
  const [isSmall, setIsSmall] = useState();
  const [isToggled, setIsToggled] = useState(false);
  useEffect(() => {
    const resize = () => setIsSmall(() => window.innerWidth < 900);
    window.addEventListener('resize', resize);
    resize();
  });
  return (
    <div className='sidebar'>
      <p className='sidebar-brand'>SAMC</p>
      <Item>What We Do</Item>
      <Item>Where We Work</Item>
      <Item>Who We Are</Item>
      <Item>Our Stroies</Item>
      <Item>Ways to give</Item>
    </div>
  );
}

const Item = props => {
  return (
    <a href={props.link || '/'} className='sidebar-item'>
      {props.children}
    </a>
  );
};
