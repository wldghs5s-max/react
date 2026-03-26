import { useState } from 'react';
import './App.css';
import NamePage from './pages/NamePage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NamePage />
    </>
  );
}

export default App;
