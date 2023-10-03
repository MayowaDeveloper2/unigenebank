import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Type = () => {

  return (
    <>
      <div style={{ margin: 'auto 0', fontWeight: 'normal', color: 'black' }}>
        We provide{' '}
        <span style={{ color: 'black', fontWeight: 'normal' }}>
          <Typewriter
            words={['genes', 'research', 'training']}
            loop={0 | false}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </div>
    </>
  );
};

export default Type;
