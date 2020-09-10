import React from 'react';

export const Container = props => {
  return <div className='newsletter-parent-container'>{props.children}</div>;
};

export const Left = props => {
  return <Contain>{props.children}</Contain>;
};

export const Right = props => {
  return <Contain>{props.children}</Contain>;
};

export const Item = props => {
  return <p className='newsletter-item'>{props.children}</p>;
};

const Contain = props => {
  return <div className='newsletter-contain'>{props.children}</div>;
};

export const Button = props => {
  return (
    <button className='button-secondary-big'>
      {props.children.toUpperCase()}
    </button>
  );
};

export const SocialMediaButton = props => {
  return <button className='button-social-media'>{props.children}</button>;
};

export const ButtonContainer = props => {
  return <div className='horizontal-button-container'>{props.children}</div>;
};
