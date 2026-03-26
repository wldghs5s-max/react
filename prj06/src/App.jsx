import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import CounterPage from './pages/CounterPage';
import PersonPage from './pages/PersonPage';
import { use } from 'react';

function App() {
  const navi = useNavigate();
  return (
    <>
      <h1>REACT PAGE</h1>
      <Link to={'/counter/1'}>카운터</Link>
      <br />
      <Link to={'/person/1'}>사람</Link>
      <br />
      <Link to={'/*'}>404 NF</Link>
      <hr />
      <button
        onClick={() => {
          navi('/counter/1');
        }}
      >
        카운터
      </button>
      <button
        onClick={() => {
          navi('/person');
        }}
      >
        사람
      </button>
      <button
        onClick={() => {
          navi('/*');
        }}
      >
        404 NF
      </button>
      <Routes>
        <Route path="/counter/:x" element={<CounterPage />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/person/:n/:a" element={<PersonPage />} />
        <Route path="/person" element={<PersonPage />} />
        <Route path="/*" element={<h1>404 NOT FOUND ~~~</h1>} />
      </Routes>
    </>
  );
}

export default App;
