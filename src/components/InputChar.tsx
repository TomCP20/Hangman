export default function InputChar(props: Readonly<{ handleClick(c: string): () => void, guessed: Set<string>; }>) {
  const { handleClick, guessed } = props;
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return (
    <div>
      {alphabet.split('').map((c, i) => {
        return (
          <>
            <button key={crypto.randomUUID()} onClick={handleClick(c)} className='letter' disabled={guessed.has(c)}>{c}</button>
            {i % 10 == 9 ? <br /> : false}
          </>
        )
      })}
    </div>
  );
}
