import React, { useState } from 'react';

const menuButton = {
  border: 'solid',
  backgroundColor: 'rgba(200, 50, 25, 0.5)',
  borderColor: 'rgba(225, 50, 25, 0.5)',
  padding: '1rem',
  fontSize: '150%',
  color: 'gold',
};

const Menu = (props) => {
  const [hide, setHide] = useState(false);
  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: '40%',
        zIndex: '10000000',
      }}
      onMouseEnter={() => {
        setHide(true);
      }}
      onMouseLeave={() => {
        setHide(false);
      }}
    >
      {hide ? (
        <>
          <div
            onClick={() => {
              props.setPageNum(0);
            }}
            style={{
              ...menuButton,
              backgroundColor: `${
                props.pageNum === 0
                  ? 'rgba(255, 50, 25, 0.5)'
                  : 'rgba(170, 50, 25, 0.5)'
              }`,
            }}
          >
            {'𝒯𝒾𝓉𝓁𝑒 𝒫𝒶𝑔𝑒'}
          </div>
          <b
            style={{
              backgroundColor: 'rgba(200, 50, 25, 0.5)',
              border: 'solid',
              borderColor: 'rgba(200, 50, 25,1)',
              position: 'absolute',
              width: '0.75rem',
              right: '-3rem',
              color: 'gold',
              fontSize: '150%',
              padding: '1rem',
            }}
          >
            {'}'}
          </b>
          <div
            onClick={() => {
              props.setPageNum(1);
            }}
            style={{
              ...menuButton,
              backgroundColor: `${
                props.pageNum === 1
                  ? 'rgba(255, 50, 25, 0.5)'
                  : 'rgba(170, 50, 25, 0.5)'
              }`,
            }}
          >
            {'𝒫𝒽𝑜𝓉𝑜𝓇𝑒𝑒𝓁'}
          </div>
          <div
            onClick={() => {
              props.setPageNum(2);
            }}
            style={{
              ...menuButton,
              backgroundColor: `${
                props.pageNum === 2
                  ? 'rgba(255, 50, 25, 0.5)'
                  : 'rgba(170, 50, 25, 0.5)'
              }`,
            }}
          >
            {'𝑀𝑒𝓈𝓈𝒶𝑔𝑒 𝐵𝑜𝒶𝓇𝒹'}
          </div>
        </>
      ) : (
        <b
          style={{
            backgroundColor: 'rgba(200, 50, 25, 0.5)',
            border: 'solid',
            borderColor: 'rgba(200, 50, 25,1)',
            position: 'absolute',
            width: '0.75rem',
            right: '-3rem',
            color: 'gold',
            fontSize: '150%',
            padding: '1rem',
            top: '4.5rem',
          }}
        >
          {'}'}
        </b>
      )}
    </div>
  );
};

export default Menu;
