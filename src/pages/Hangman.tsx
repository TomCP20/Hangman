import { useState } from 'react';
import RandomWord from '../RandomWord';
import InputChar from '../components/InputChar';
import Diagram from '../components/Diagram';

export function Hangman() {
  function handleClick(c: string) {
    return () => {
      if (!gameOver && !gameWon) {
        setGuessed(new Set(guessed).add(c));
      }
    };
  }
  function handleReset() {
    setGuessed(new Set(""));
    setWord(RandomWord());
  }

  const [word, setWord] = useState(RandomWord());
  const [guessed, setGuessed] = useState(new Set(""));

  const displayWord = word.split('').map((c) => guessed.has(c) ? c : "_").join(" ");
  const wrongGuesses = [...guessed].filter(c => !word.includes(c));
  const wrongGuessesCount = wrongGuesses.length;
  const gameOver = wrongGuessesCount >= 6;
  const gameWon = word.split('').every((c) => guessed.has(c));

  return <>
    <Diagram stage={wrongGuessesCount} />
    <div>
      {gameOver ? <>Gameover, the correct word was {word}.</> : false}
      {gameWon ? <>You Win!</> : false}
    </div>

    <div>{displayWord}</div>

    <div>Guessed: {wrongGuesses.join(" ")}</div>

    <InputChar handleClick={handleClick} guessed={guessed} />

    <button onClick={handleReset}>Reset</button>
  </>;
}