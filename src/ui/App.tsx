import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const platforms = ['node', 'chrome', 'electron'];
  const [count, setCount] = useState(0);
  const [chromeVer, setChromeVer] = useState('');
  const [nodeVer, setNodeVer] = useState('');
  const [electronVer, setElectronVer] = useState('');

  const onClickGetVersion = (platform: string) => {
    window.ipcRenderer.loadVersion(platform).then((version) => {
      if (platform === 'node') {
        setNodeVer(version);
      } else if (platform === 'electron') {
        setElectronVer(version);
      } else if (platform === 'chrome') {
        setChromeVer(version);
      }
    });
  };

  const VersionComponent = (platform: string) => {
    let version = '';
    if (platform === 'node') {
      version = nodeVer;
    } else if (platform === 'electron') {
      version = electronVer;
    } else if (platform === 'chrome') {
      version = chromeVer;
    }
    return (
      <div key={platform}>
        <div
          style={{
            display: 'inline-flex',
            justifyContent: 'space-between',
            padding: '5px',
            width: '100%',
          }}
        >
          <p style={{width: '30%', textAlign: 'left'}}>{platform}</p>
          <button style={{width: '30%'}} key={platform} onClick={() => onClickGetVersion(platform)}>
            GET
          </button>
          <p style={{width: '30%', textAlign: 'right'}}>{version}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more more
      </p>
      {platforms.map((platform) => VersionComponent(platform))}
    </>
  );
}

export default App;
