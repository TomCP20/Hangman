import { useEffect, useState } from 'react';
import RandomWord from '../RandomWord';
import InputChar from '../components/InputChar';
import Diagram from '../components/Diagram';
import { Link } from 'react-router-dom';

export default function Hangman() {
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

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      console.log(event.key)
      if ("abcdefghijklmnopqrstuvwxyz".includes(event.key) && !gameOver && !gameWon) {
        setGuessed(new Set(guessed).add(event.key));
      }
    };
    window.addEventListener("keydown", handleKeyPress);

    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [gameOver, gameWon, guessed]);


  return (
    <>
      <Diagram stage={wrongGuessesCount} />
      <div className="text-2xl font-serif text-center">
        {gameOver ? <>Gameover, the correct word was {word}.</> : false}
        {gameWon ? <>You Win!</> : false}
        {!gameOver && !gameWon ? <>Guess the word!</> : false}
      </div>

      <div className='text-2xl font-serif text-center'>{displayWord}</div>

      <div className='text-2xl font-serif text-center'>Guessed: {wrongGuesses.join(" ")}</div>

      <InputChar handleClick={handleClick} guessed={guessed} gameOver={gameOver} />

      <div className="flex justify-center">
        <button onClick={handleReset} className='text-center font-mono text-2xl m-1 p-1 h-12 w-24 rounded-md border border-solid border-black bg-gray-200 hover:bg-gray-300'>Reset</button>
        <Link to={"/"}><button type='button' className='text-center font-mono text-2xl m-1 p-1 h-12 w-24 rounded-md border border-solid border-black bg-gray-200 hover:bg-gray-300'>Home</button></Link>
      </div>
    </>
  );
}
