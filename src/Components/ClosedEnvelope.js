import React from 'react';
import cat from './cat.png';

const WellWishes = () => {
  return (
    <div
      style={{
        backgroundColor: 'rgb(206, 48, 57)',
        width: window.innerWidth / 10,
        height: (3 * window.innerHeight) / 10,
        position: 'absolute',
        top: '50%',
        left: '20%',
        borderRadius: '8px',
        border: 'solid',
        borderWidth: '0.3rem',
        borderTop: 'none',
      }}
    >
      <div
        style={{
          background: 'rgb(206, 48, 57)',
          width: '80%',
          height: '90%',
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
      <img
        src={cat}
        style={{ position: 'absolute', top: '40%', left: '30%' }}
      ></img>
      <div
        style={{
          background: 'rgb(255, 235, 100)',
          // width: '102%',
          // height: '33.3333%',
          borderRadius: '0 0 5rem 5rem',
          border: 'solid',
          borderColor: 'black',
          //borderTop:'none',
          position: 'absolute',
          top: '0%',
          left: '-2.5%',
          width: '102%',
          height: '18%',
          // height: '100px',
          // width: '200px',
        }}
      ></div>
      <div
        style={{
          background: 'rgb(206, 48, 57)',
          // width: '102%',
          // height: '33.3333%',
          borderRadius: '0 0 4rem 4rem',
          position: 'absolute',
          top: '1%',
          left: '1%',
          width: '98%',
          height: '17%',
        }}
      ></div>
    </div>
  );
};

export default WellWishes;
