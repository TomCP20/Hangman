interface LetterButtonProps {
    onClick: () => void;
    character: string;
    disabled: boolean;
}

export default function LetterButton(props: Readonly<LetterButtonProps>) {
    const { onClick, character, disabled } = props;
    return <button onClick={onClick} className='letter' disabled={disabled}>{character}</button>;
}
