import * as React from "react";
type ButtonStyle = {
  [property: string]: string;
}
export interface ButtonProps {
  label: string;
  style?: ButtonStyle;
  onClick: () => void;
}
export const Button = ({ label, style, onClick }: ButtonProps) => {
  return (
    <button style={style} onClick={onClick} className="p-4 bg-indigo-400 rounded-lg border-2 border-indigo-800">{label}</button>
  );
};
