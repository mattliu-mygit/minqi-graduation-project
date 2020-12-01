import React, { useState, useEffect } from 'react';
import './App.css';
import OpenEnvelope from './Components/OpenEnvelope';
import ClosedEnvelope from './Components/ClosedEnvelope';
import background from './background.jpeg';
import sevenStar from './sevenStar.mp3';
import RunningGirl from './Components/RunningGirl';
import OpenedMessage from './Components/OpenedMessage';
import ReactAudioPlayer from 'react-audio-player';
import messages from './messages';
import PhotoReelPage from './Components/PhotoReelPage';
import EnvelopesPage from './Components/EnvelopesPage';
//import banner from './banner.png';

function App() {
  const [sound, setSound] = useState(true);
  const [verticalLevel, setVerticalLevel] = useState(0);
  const [x, setX] = useState(-30);
  const [envelopes, setEnvelopes] = useState([]);
  const [lastPushed, setLastPushed] = useState(0);
  const [r, setR] = useState(true);
  const [opened, setOpened] = useState(0);
  const [height, setHeight] = useState(window.visualViewport.height);
  const [rBorder, setRBorder] = useState(false);
  const [pageNum, setPageNum] = useState(0);

  useEffect(() => {
    const calced = ((messages.length + 2) * 11) % window.visualViewport.width;
    const convertedHeight =
      ((calced + 1) * 24) / 3 > window.visualViewport.height
        ? (calced * 24) / 3
        : window.visualViewport.height;
    setHeight(convertedHeight);
  }, []);

  useEffect(() => {
    if (
      !(parseInt(x) % 15) &&
      x + 5 > 0 &&
      ((parseInt(x) !== lastPushed && r) ||
        (parseInt(x) !== lastPushed && !r)) &&
      envelopes.length < messages.length
    ) {
      setRBorder(false);
      console.log('pushing envelope');
      setLastPushed(parseInt(x));
      envelopes.push([x - 5, verticalLevel, envelopes.length + 1]);
    } else if (!(parseInt(x) % 15) && !r && x > 74 && !rBorder) {
      setRBorder(true);
      envelopes.push([x - 5, verticalLevel, envelopes.length + 1]);
    }
    //console.log(envelopes);
  }, [x, verticalLevel]);

  return (
    <>
      <div
        className="App"
        style={{
          width: window.visualViewport.width,
          height: height,
          position: 'absolute',
          background: 'transparent',
        }}
        onClick={() => {
          console.log('setting open');
          setOpened(0);
        }}
      ></div>
      <div
        className="App"
        style={{
          width: window.visualViewport.width,
          height: height,
          background: `linear-gradient(rgba(255, 105, 100, 0.7), rgba(222, 193, 0, 0.5)), url(${background})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
          backgroundPositionY: 'center',
          backgroundAttachment: 'fixed',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {sound ? (
          <ReactAudioPlayer
            src={sevenStar}
            autoPlay={true}
            controls={false}
            loop={true}
            preload
          />
        ) : null}
        <div
          style={{
            fontSize: '300%',
            textAlign: 'center',
            color: '#DBA514',
            backgroundColor: 'rgba(100, 0, 0, 0.5)',
            position: 'absolute',
            width: '100%',
            top: '0rem',
            left: '0rem',
            height: '7rem',
            paddingTop: '2rem',
          }}
        >
          𝐻𝒶𝓅𝓅𝓎 𝒢𝓇𝒶𝒹𝓊𝒶𝓉𝒾𝑜𝓃 𝑀𝒾𝓃𝓆𝒾!
        </div>

        {pageNum === 1 ? (
          <PhotoReelPage />
        ) : pageNum === 2 ? (
          <EnvelopesPage
            setOpened={setOpened}
            x={x}
            messages={messages}
            opened={opened}
            setX={setX}
            verticalLevel={verticalLevel}
            setVerticalLevel={setVerticalLevel}
            r={r}
            setR={setR}
            envelopes={envelopes}
          />
        ) : null}
        <button
          onClick={() => {
            setSound(!sound);
          }}
          style={{ position: 'absolute', top: 0 }}
        >
          Toggle music
        </button>
        {pageNum === 0 ? (
          <>
            <div
              onClick={() => {
                setPageNum(1);
              }}
              style={{ position: 'absolute', left: 0, top: 0 }}
            >
              {'< Photoreel'}
            </div>
            <div
              onClick={() => {
                setPageNum(2);
              }}
              style={{ position: 'absolute', right: 10, top: 0 }}
            >
              {'Message Board >'}
            </div>
          </>
        ) : pageNum === 1 ? (
          <>
            <div
              onClick={() => {
                setPageNum(2);
              }}
              style={{ position: 'absolute', right: 10, top: 0 }}
            >
              {'Message Board >'}
            </div>
          </>
        ) : (
          <>
            <div
              onClick={() => {
                setPageNum(1);
              }}
              style={{ position: 'absolute', left: 10, top: 0 }}
            >
              {'< Photoreel'}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
