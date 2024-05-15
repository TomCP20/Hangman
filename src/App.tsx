import { useState } from 'react'
import './App.css'
import RandomWord from './RandomWord';
import InputChar from './components/InputChar';
import Diagram from './components/Diagram';

export default function App() {
  function handleClick(c: string) {
    return () => {
      if (!gameOver && !gameWon) {
        setGuessed(new Set(guessed).add(c))
      }
    };
  }
  function handleReset() {
    setGuessed(new Set(""));
    setWord(RandomWord())
  }

  const [word, setWord] = useState(RandomWord());
  const [guessed, setGuessed] = useState(new Set(""));

  const displayWord = word.split('').map((c) => guessed.has(c) ? c : "_").join(" ");
  const wrongGuesses = [...guessed].filter(c => !word.includes(c));
  const wrongGuessesCount = wrongGuesses.length;
  const gameOver = wrongGuessesCount >= 6;
  const gameWon = word.split('').every((c) => guessed.has(c));


  return (
    <>
      <Diagram wrongGuessesCount={wrongGuessesCount} />

      {gameOver ? <div>Gameover, the correct word was {word}.</div> : false}
      {gameWon ? <div>You Win!</div> : false}

      <div>{displayWord}</div>

      <div>Guessed: {wrongGuesses.join(" ")}</div>

      <InputChar handleClick={handleClick} guessed={guessed} />

      <button onClick={handleReset}>Reset</button>
    </>
  )
}