export default function Diagram(props: Readonly<{ wrongGuessesCount: number; gameOver: boolean; gameWon: boolean; }>) {
  const {wrongGuessesCount, gameOver, gameWon} = props;
  return (
    <>
      <div>
        {wrongGuessesCount}/6
      </div>
      {gameOver ? <div>Gameover.</div> : false}
      {gameWon ? <div>You Win!</div> : false}
    </>
  );
}
