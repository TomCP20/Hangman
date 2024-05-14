import { useState } from 'react'
import './App.css'
import RandomWord from './RandomWord';

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

function IncorrectGuessess(props: Readonly<{ wrongGuesses: string[] }>) {
  return (
    <div>Guessed: {props.wrongGuesses.join(" ")}</div>
  );
}

function DisplayWord(props: Readonly<{ word: string, guessed: Set<string> }>) {
  return (
    <div>
      {props.word.split('').map((c) => props.guessed.has(c) ? c : "_").join(" ")}
    </div>
  );
}

function InputChar(props: Readonly<{ handleClick(c: string): () => void }>) {

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return (
    <div>
      {alphabet.split('').map((c, i) => { return <> <button key={c} onClick={props.handleClick(c)} className='letter'>{c}</button>  {i % 10 == 9 ? <br /> : false} </> })}
    </div>
  )
}

function Diagram(props: Readonly<{ wrongGuessesCount: number, gameOver: boolean, gameWon: boolean }>) {
  return (
    <>
      <div>
        {props.wrongGuessesCount}/6
      </div>
      
        {props.gameOver ? <div>Gameover.</div> : false}
        {props.gameWon ? <div>You Win!</div> : false}
      
    </>

  )
}

function ResetGame(props: Readonly<{ onClick: React.MouseEventHandler<HTMLButtonElement> }>) {
  return (
    <button onClick={props.onClick}>
      Reset
    </button>
  )
}