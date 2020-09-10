import React, { useState, useEffect } from 'react';
import CustomHeader from '../header/Header';

export function Body(props) {
  return <div style={styles.container}>{props.children}</div>;
}
export const Full = props => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const scroll = () => {
      let value = window.pageYOffset;
      if (value > 60) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener('scroll', scroll);
    scroll();
  });
  return (
    <div>
      {scrolled ? (
        <div style={styles.scrollHeader}>
          <CustomHeader bg='rgba(0,0,0,.7)' customClass='scroll'>
            {props.children}
          </CustomHeader>
        </div>
      ) : null}
      <CustomHeader bg='transparent'>{props.children}</CustomHeader>
      {props.children}
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    minHeight: '89vh',
    backgroundColor: 'whitesmoke',
  },
  scrollHeader: {
    position: 'sticky',
    top: 0,
    left: 0,
    zIndex: 9,
  },
};
