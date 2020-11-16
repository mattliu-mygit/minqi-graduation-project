import './App.css';
import OpenEnvelope from './Components/OpenEnvelope';
import ClosedEnvelope from './Components/ClosedEnvelope';

function App() {
  return (
    <div
      className="App"
      style={{
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: 'white',
      }}
    >
      <OpenEnvelope />
      <ClosedEnvelope />
    </div>
  );
}

export default App;
