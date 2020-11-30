import React, { useState } from 'react';
import './App.css';
import OpenEnvelope from './Components/OpenEnvelope';
import ClosedEnvelope from './Components/ClosedEnvelope';
import background from './background.jpeg';
import sevenStar from './sevenStar.mp3';
import RunningGirl from './Components/RunningGirl';
import OpenedMessage from './Components/OpenedMessage';
//import banner from './banner.png';

function App() {
  const [sound, setSound] = useState(true);
  return (
    <>
      <div
        className="App"
        style={{
          width: window.innerWidth,
          height: window.innerHeight,
          background: `linear-gradient(rgba(255, 105, 100, 0.7), rgba(222, 193, 0, 0.5)), url(${background})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
        }}
      >
        {sound ? (
          <audio
            id="audio"
            autoPlay={sound}
            src={sevenStar}
            type="audio/mp3"
          ></audio>
        ) : null}
        <div
          style={{
            fontSize: window.innerWidth / 20,
            textAlign: 'center',
            color: '#DBA514',
            backgroundColor: 'rgba(100, 0, 0, 0.2)',
            //borderRadius: '12px',
            padding: '2%',
          }}
        >
          𝐻𝒶𝓅𝓅𝓎 𝒢𝓇𝒶𝒹𝓊𝒶𝓉𝒾𝑜𝓃 𝑀𝒾𝓃𝓆𝒾!
        </div>
        {/* <div
          style={{
            backgroundColor: 'rgba(100, 0, 0, 0.2)',
            width: '100%',
            height: '25%',
          }}
        >
          <img
            src={banner}
            style={{
              width: '80%',
              height: '60%',
              objectFit: 'cover',
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
            alt="can'tfind banner"
          ></img>
        </div> */}
        <RunningGirl />
        <OpenEnvelope />
        <ClosedEnvelope />
        <OpenedMessage />
      </div>
      <button
        onClick={() => {
          setSound(!sound);
        }}
        style={{ position: 'absolute', top: 0 }}
      >
        Toggle music
      </button>
    </>
  );
}

export default App;
