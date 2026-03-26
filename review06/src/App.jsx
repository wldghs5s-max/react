import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';
import CounterPage from './pages/CounterPage';
import PersonPage from './pages/PersonPage';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  const navi = useNavigate();

  return (
    <>
      <h1>기본 홈화면</h1>
      <hr />
      <Link to={'counter'}>카운터</Link>
      <br />
      <Link to={'person'}>사람</Link>
      <br />
      <button
        onClick={() => {
          navi('counter');
        }}
      >
        카운터
      </button>
      <button
        onClick={() => {
          navi('person');
        }}
      >
        사람
      </button>
      <Routes>
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/person" element={<PersonPage />} />
      </Routes>
    </>
  );
}

export default App;
