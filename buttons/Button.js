import React from 'react';
import { colors } from '../../constants/constants';

const Button = props => {
  return (
    <a
      href={props.to || '#'}
      className='button'
      style={{
        backgroundColor: props.background || colors.secondary,
        color: props.color || colors.whiteOpaque,
      }}
    >
      {props.children.toUpperCase()}
    </a>
  );
};

export default Button;
