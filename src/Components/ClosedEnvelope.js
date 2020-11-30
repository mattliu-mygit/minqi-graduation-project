import React, { useState, useEffect } from 'react';
import cat from './cat.png';
import OpenEnvelope from './OpenEnvelope';

const ClosedEnvelope = (props) => {
  // useEffect(() => {
  //   if (props.open !== props.index) {
  //     setClicked(false);
  //   }
  // }, [props]);
  return (
    <>
      {props.open !== props.id ? (
        <a
          onClick={() => {
            console.log('envelope');
            //setClicked(!clicked);
            console.log(props.open, props.id);
            props.setOpened(props.id);
          }}
        >
          <div
            style={{
              backgroundColor: 'rgb(206, 48, 57)',
              width: window.innerWidth / 10,
              height: (3 * window.innerHeight) / 10,
              position: 'absolute',
              top: `${props.verticalLevel * 35 + 20}%`,
              left: `${props.x}%`,
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
        </a>
      ) : (
        <>
          <OpenEnvelope
            x={props.x}
            verticalLevel={props.verticalLevel}
            setOpened={props.setOpened}
            index={props.index}
          />
        </>
      )}
    </>
  );
};

export default ClosedEnvelope;
