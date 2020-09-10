import React from 'react';

export default function ContainerFull(props) {
  return (
    <div
      className='container-full'
      style={{
        backgroundColor: props.bgcolor || 'white',
        color: props.color || 'black',
      }}
    >
      {props.children}
    </div>
  );
}
