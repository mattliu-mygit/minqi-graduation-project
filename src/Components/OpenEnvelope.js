import React, { useEffect } from 'react';
import cat from './lion1.png';

const OpenEnvelope = (props) => {
  return (
    <a
      onClick={() => {
        console.log('resetting');
        props.setOpened(0);
      }}
      onMouseLeave={() => {
        props.setOpened(0);
      }}
    >
      <div
        style={{
          backgroundColor: 'rgb(206, 48, 57)',
          width: '14rem',
          height: '24rem',
          position: 'absolute',
          top: `${props.verticalLevel * 25 + 10}rem`,
          left: `${props.x}%`,
          borderRadius: '8px',
          border: 'solid',
          borderWidth: '0.3rem',
        }}
      >
        <div
          style={{
            background: 'rgb(206, 48, 57)',
            width: '80%',
            height: '80%',
            borderTop: 'none',
            margin: '9%',
            border: 'solid',
            borderRadius: '5px',
            borderBottomLeftRadius: '5px',
            borderColor: 'rgb(255, 235, 100)',
            position: 'absolute',
            bottom: '0%',
          }}
        ></div>
        <div
          style={{
            background: 'rgb(206, 48, 57)',
            width: '82.5%',
            height: '30%',
            borderRadius: '45%',
            borderBottom: 'solid',
            borderBottomColor: 'rgb(255, 235, 100)',
            position: 'absolute',
            top: '-5.5%',
            borderBottomWidth: '0.25rem',
            left: '9.5%',
          }}
        >
          <img
            src={cat}
            style={{
              position: 'absolute',
              bottom: '-14.75rem',
              left: '-1.3rem',
              width: '14rem',
            }}
          ></img>
        </div>
        <div
          style={{
            background: 'rgb(206, 48, 57)',
            width: '102%',
            height: '33.3333%',
            borderRadius: '50%',
            border: 'solid',
            borderColor: 'black',
            position: 'absolute',
            top: '-18%',
            left: '-2.5%',
          }}
        ></div>
      </div>
    </a>
  );
};

export default OpenEnvelope;
