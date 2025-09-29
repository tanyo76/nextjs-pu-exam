"use client";

type ButtonProps = {
  removeHandler: (bookId: string) => void;
  text: string;
  param: string;
};

const Button = ({ removeHandler, text, param }: ButtonProps) => {
  return (
    <button
      onClick={() => removeHandler(param)}
      className="cursor-pointer text-red-700 mt-2 inline-flex items-center justify-center rounded-lg border border-gray-200 px-3 py-1.5 text-sm font-medium transition hover:bg-gray-50"
    >
      {text}
    </button>
  );
};

export default Button;
