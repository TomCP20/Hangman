interface LetterButtonProps {
    onClick: () => void;
    character: string;
    disabled: boolean;
}

export default function LetterButton(props: Readonly<LetterButtonProps>) {
    const { onClick, character, disabled } = props;
    return <button onClick={onClick} className='text-center font-mono text-2xl m-1 p-1 size-12 rounded-md border border-solid border-black bg-gray-200 hover:bg-gray-300 disabled:bg-gray-400' disabled={disabled}>{character}</button>;
}
