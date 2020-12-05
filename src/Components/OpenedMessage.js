import React, { useState, useEffect } from 'react';
import watermark from './watermark1.png';

const OpenedMessage = (props) => {
  const [height, setHeight] = useState(100);
  useEffect(() => {
    const bod = document.getElementById('messageBod');
    setHeight(bod.offsetHeight + 25);
  }, [props.id]);

  const getMessage = () => {
    const paras = [];
    props.body.message.forEach((para) => paras.push(<p>{para}</p>));
    return paras;
  };

  return (
    <div
      style={{
        width: '35rem',
        //paddingBottom: height,
        position: 'absolute',
        top: '25%',
        backgroundColor: '#EFE5D5',
        border: 'solid',
        borderColor: 'gray',
        fontSize: '1.25rem',
        zIndex: '10000000000',
        backgroundImage: `url(${watermark})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '50%',
        backgroundPositionY: '98%',
        backgroundPositionX: '98%',
        backgroundBlendMode: 'saturation',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
      onClick={() => {
        props.setOpen(0);
      }}
    >
      {props.body.images.length > 0 ? (
        <img
          id="img"
          src={props.body.images[0]}
          style={{ width: '100%' }}
          alt="minqi"
        ></img>
      ) : null}
      <div
        style={{
          width: '80%',
          zIndex: '1000',
          padding: '2.5rem',
        }}
        id="messageBod"
      >
        <div id="message">{getMessage()}</div>
        <p id="name"> - {props.body.name}</p>
      </div>
    </div>
  );
};

export default OpenedMessage;
