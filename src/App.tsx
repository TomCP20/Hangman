import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Hangman from './pages/Hangman';
import { Home } from './pages/Home';

export default function App() {
  return (
    <>
      <h1>Hangman</h1>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Hangman />} />
        </Routes>
      </HashRouter>
    </>
  );
}


