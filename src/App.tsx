import { useState } from 'react'
import './App.css'
import RandomWord from './RandomWord';
import IncorrectGuessess from './components/IncorrectGuessess';
import DisplayWord from './components/DisplayWord';
import InputChar from './components/InputChar';
import Diagram from './components/Diagram';
import ResetGame from './components/ResetGame';

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
  const wrongGuesses = [...guessed].filter(c => !word.includes(c));
  const wrongGuessesCount = wrongGuesses.length
  const gameOver = wrongGuessesCount >= 6;
  const gameWon = word.split('').every((c) => guessed.has(c))


  return (
    <>
      <Diagram wrongGuessesCount={wrongGuessesCount} gameOver={gameOver} gameWon={gameWon} />

      <DisplayWord word={word} guessed={guessed} />

      <IncorrectGuessess wrongGuesses={wrongGuesses} />

      <InputChar handleClick={handleClick} />

      <ResetGame onClick={handleReset} />
    </>
  )
}