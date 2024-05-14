export default function InputChar(props: Readonly<{ handleClick(c: string): () => void; }>) {
  const {handleClick} = props;
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return (
    <div>
      {alphabet.split('').map((c, i) => { return <> <button key={c} onClick={handleClick(c)} className='letter'>{c}</button>  {i % 10 == 9 ? <br /> : false} </>; })}
    </div>
  );
}
