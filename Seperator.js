import React from 'react';
import { colors } from '../constants/constants';

export default function Seperator(props) {
  const color = props.color || colors.whiteOpaque;
  return <hr style={{ border: `1px solid ${color}`, opacity: '.1' }} />;
}
