import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  const [mode, setMode] = useState(() => {
    const storedMode = localStorage.getItem('mode');
    return storedMode ? storedMode === 'true' : false;
  });

  useEffect(() => {
    localStorage.setItem('mode', mode.toString());
  }, [mode]);

  function modeNow() {
    setMode((prevMode) => !prevMode);
  }

  return (
    <>
      <div className={!mode ? 'dark' : ''}>
        <Header modeNow={modeNow} mode={mode} />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
