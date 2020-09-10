import React from 'react';

export const Container = props => {
  return <div className='donations-parent-container'>{props.children}</div>;
};

export const Title = props => {
  return (
    <div
      className='h-1'
      style={{ opacity: 0.8, color: props.color || 'black' }}
    >
      {props.children.toUpperCase()}
    </div>
  );
};

export const SubTitle = props => {
  return (
    <div
      className='h-2'
      style={{ opacity: 0.8, color: props.color || 'black' }}
    >
      {props.children.toUpperCase()}
    </div>
  );
};

export const Content = props => {
  const fontSize = () => {
    let size;
    if (!props.size) return (size = '15px');
    if (props.size == large) size = '25px';
    else if (props.size == small) size = '15px';
    else if (props.size == medium) size = '20px';
    else if (props.size == tiny) size = '10px';
    return size;
  };
  return (
    <div className='content' style={{ fontSize: fontSize() }}>
      {props.children}
    </div>
  );
};

export const Button = props => {
  return (
    <a href={props.to || '#'} className='button-secondary-big'>
      {props.children.toUpperCase()}
    </a>
  );
};
