import { ReactNode } from "react";

interface OptionButtonProps {
  children: ReactNode;
  onClick?: () => void;
}
export function OptionButton(props: Readonly<OptionButtonProps>) {
  const { children, onClick } = props;
  return (
    <button type='button' onClick={onClick} className="text-center font-mono text-2xl m-1 p-1 h-12 w-24 rounded-md border border-solid border-black bg-gray-200 hover:bg-gray-300">
      {children}
    </button>);
}
