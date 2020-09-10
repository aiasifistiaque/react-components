import React, { useState, useEffect } from 'react';

export const CustomHeader = props => {
  const customClass = () => {
    if (props.customClass == 'scroll') return 'header-scroll';
    return 'header';
  };

  const [isSmall, setIsSmall] = useState();
  const [isToggled, setIsToggled] = useState(false);
  useEffect(() => {
    const resize = () => setIsSmall(() => window.innerWidth < 900);
    window.addEventListener('resize', resize);
    resize();
  });
  return (
    <div className={customClass()} style={{ backgroundColor: props.bg }}>
      <Brand>{props.brand}</Brand>
      {isSmall ? <ToggleMenu>{props.children}</ToggleMenu> : props.children}
    </div>
  );
};

export const Brand = props => {
  return (
    <a href='#' className='header-brand'>
      {props.children}
    </a>
  );
};

export const ItemContainer = props => {
  return <div className='header-item-container'>{props.children}</div>;
};

export const Item = props => {
  return (
    <a href={props.to} className='header-item'>
      {props.children}
    </a>
  );
};

export const HeaderButton = props => {
  return (
    <a className='header-button' href={props.to || '/'}>
      {props.children}
    </a>
  );
};

export const ToggleMenu = props => {
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
        <img src='/menu.svg' className='header-toggle-icon' />
      </a>
      {isToggled ? props.children : null}
    </div>
  );
};

export const HeroHeader = props => {
  const img = `url('/${props.img}.jpg')` || url('/background-cover.jpg');
  const styles = {
    backgroundImage: `url('/background-cover.jpg')`,
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <CustomHeader brand={props.brand} customStyle={styles} customClass='hero'>
        {props.children}
      </CustomHeader>
    </div>
  );
};
