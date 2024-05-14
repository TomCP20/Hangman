export default function DisplayWord(props: Readonly<{ word: string; guessed: Set<string>; }>) {
  const {word, guessed} = props;
  return (
    <div>
      {word.split('').map((c) => guessed.has(c) ? c : "_").join(" ")}
    </div>
  );
}
