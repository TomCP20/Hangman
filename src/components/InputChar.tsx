import LetterButton from "./LetterButton";

interface InputCharProps {
  handleClick(c: string): () => void;
  guessed: Set<string>;
  gameOver: boolean;
}

export default function InputChar(props: Readonly<InputCharProps>) {
  const { handleClick, guessed, gameOver } = props;
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return (
    <div className="text-center">
      {alphabet.split('').map((character, i) => {
        return (
          <>
            <LetterButton key={crypto.randomUUID()} onClick={handleClick(character)} character={character} disabled={guessed.has(character) || gameOver} />
            {i % 10 == 9 ? <br /> : false}
          </>
        )
      })}
    </div>
  );
}

