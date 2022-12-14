import { useState } from 'react';
import reactLogo from './assets/react.svg';
import ButtonBase from './components/ButtonBase.jsx';
import ButtonSolid from './components/ButtonSolid.jsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <div
        className="card"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <p>Base + Variant Pattern</p>
        <ButtonBase>ButtonBase</ButtonBase>
        <br />
        <ButtonSolid>ButtonSolid</ButtonSolid>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
}

export default App;
