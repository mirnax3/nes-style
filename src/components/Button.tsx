import * as React from "react";

export type ButtonProps = {
  label: string;
  onClick: () => void;
}
export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className="p-4 bg-indigo-400 rounded-lg border-2 border-indigo-800">{label}</button>
  );
};
