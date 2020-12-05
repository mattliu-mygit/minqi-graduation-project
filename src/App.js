import React, { useState, useEffect } from 'react';
import './App.css';
import background from './background.jpeg';
import sevenStar from './sevenStar.mp3';
import ReactAudioPlayer from 'react-audio-player';
import messages from './messages';
import PhotoReelPage from './Components/PhotoReelPage';
import EnvelopesPage from './Components/EnvelopesPage';
import lab1 from './photos/lab1.jpg';
import Menu from './Components/Menu';
import InitPage from './Components/InitPage';
import photos from './photos';
import drumToggle from './Components/drum1.png';

function App() {
  const [sound, setSound] = useState(false);
  const [verticalLevel, setVerticalLevel] = useState(0);
  const [x, setX] = useState(-30);
  const [envelopes, setEnvelopes] = useState([]);
  const [lastPushed, setLastPushed] = useState(0);
  const [r, setR] = useState(true);
  const [opened, setOpened] = useState(0);
  const [height, setHeight] = useState(window.visualViewport.height);
  const [rBorder, setRBorder] = useState(false);
  const [pageNum, setPageNum] = useState(0);
  const [passedOver, setPassedOver] = useState(0);

  useEffect(() => {
    const calced = ((messages.length + 2) * 15) % window.visualViewport.width;
    const convertedHeight =
      ((calced + 1) * 24) / 3 > window.visualViewport.height
        ? (calced * 24) / 3
        : window.visualViewport.height;
    setHeight(convertedHeight);
  }, []);

  useEffect(() => {
    if (
      !(parseInt(x) % 15) &&
      x > 0 &&
      ((parseInt(x) !== lastPushed && r && x > 5) ||
        (parseInt(x) !== lastPushed && !r && x > 5)) &&
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
    // console.log(envelopes);
  }, [x, verticalLevel]);

  useEffect(() => {
    if (sound && pageNum === 0 && passedOver === 0) {
      setTimeout(() => {
        if (pageNum === 0) {
          setPassedOver(1);
          setPageNum(1);
        } else {
          setPassedOver(-1);
        }
      }, 3000);
    } else if (sound && pageNum === 1 && passedOver === 1) {
      setTimeout(() => {
        if (pageNum === 1) {
          setPassedOver(2);
          setPageNum(2);
        } else {
          setPassedOver(-1);
        }
      }, 3400 * photos.length);
    } else if (sound && pageNum === 2) {
      setPassedOver(-1);
    }
  }, [sound, pageNum]);

  return (
    <>
      <div
        className="App"
        style={{
          width: '100%',
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
          width: '100%',
          height: height,
          background: `linear-gradient(rgba(255, 105, 100, 0.7), rgba(222, 193, 0, 0.5)), url(${background})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
          backgroundPositionY: 'center',
          backgroundAttachment: 'fixed',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0rem',
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
            height: '9rem',
            display: 'flex',
            justifyContent: 'center',
            margin: '0rem',
          }}
        >
          <img
            src={lab1}
            style={{
              width: '100%',
              height: '9rem',
              opacity: '0.4',
              zIndex: '100',
              objectFit: 'cover',
              objectPosition: '50% 40%',
              position: 'absolute',
              left: '0rem',
              top: '0rem',
            }}
            alt="lab1"
          ></img>
          <div
            style={{
              zIndex: '10000',
              position: 'absolute',
              paddingTop: '2rem',
            }}
          >
            𝐻𝒶𝓅𝓅𝓎 𝒢𝓇𝒶𝒹𝓊𝒶𝓉𝒾𝑜𝓃 𝑀𝒾𝓃𝓆𝒾!
          </div>
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
        ) : (
          <InitPage setSound={setSound} sound={sound} />
        )}
        <Menu setPageNum={setPageNum} pageNum={pageNum} />
      </div>
      <div
        style={{
          position: 'absolute',
          right: '2.5rem',
          bottom: '2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '1.5rem',
          zIndex: '999999999999',
        }}
        onClick={() => {
          setSound(!sound);
        }}
      >
        <b>Turn {sound ? 'off' : 'on'} sound.</b>
      </div>
    </>
  );
}

export default App;
