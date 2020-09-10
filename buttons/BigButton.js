import React from 'react';
import { colors } from '../../constants/constants';

const BigButton = props => {
  return (
    <a
      href={props.to || '#'}
      className='button-big'
      style={{
        backgroundColor: props.background || colors.secondary,
        color: props.color || colors.whiteOpaque,
      }}
    >
      {props.children.toUpperCase()}
    </a>
  );
};

export default BigButton;
