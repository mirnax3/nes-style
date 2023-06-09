import * as React from "react";

export type ButtonProps = {
  label: string;
  onClick: () => void;
}
export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className="nes-btn is-primary p-4">{label}</button>
  );
};
