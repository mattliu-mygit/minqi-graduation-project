import React, { useState, useEffect } from 'react';
import girl from './girl.gif';

const RunningGirl = (props) => {
  useEffect(() => {
    if (props.x < 69 && props.r) {
      setTimeout(() => props.setX(props.x + 0.05), 1);
    } else if (props.r && props.verticalLevel === 0) {
      props.setVerticalLevel(props.verticalLevel + 1);
      props.setR(false);
    } else if (props.x > -31 && !props.r) {
      setTimeout(() => props.setX(props.x - 0.05), 1);
    }
  }, [props.x, props.r]);

  return (
    <div
      style={{
        width: '30%',
        position: 'absolute',
        top: `${props.verticalLevel * 35 + 20}%`,
        left: `${props.x}%`,
        transform: `scaleX(${props.r ? 1 : -1})`,
      }}
    >
      <img src={girl} style={{ width: '100%' }}></img>
    </div>
  );
};

export default RunningGirl;
