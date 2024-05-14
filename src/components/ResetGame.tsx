export default function ResetGame(props: Readonly<{ onClick: React.MouseEventHandler<HTMLButtonElement>; }>) {
  const {onClick} = props;
  return (
    <button onClick={onClick}>
      Reset
    </button>
  );
}
