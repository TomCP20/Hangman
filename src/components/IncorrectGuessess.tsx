export default function IncorrectGuessess(props: Readonly<{ wrongGuesses: string[]; }>) {
  const {wrongGuesses} = props;
  return (
    <div>Guessed: {wrongGuesses.join(" ")}</div>
  );
}
