import React from 'react';
import girl from './girl.gif';

const RunningGirl = () => {
  return (
    <div
      style={
        {
          // backgroundImage: `url(${girl})`,
          // width: '20%',
          // height: '20%',
          // backgroundRepeat: 'no-repeat',
          // backgroundSize: '100% 100%',
        }
      }
    >
      <img src={girl}></img>
    </div>
  );
};

export default RunningGirl;
