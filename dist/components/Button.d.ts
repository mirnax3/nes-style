import * as React from "react";
type ButtonStyle = {
    [property: string]: string;
};
export interface ButtonProps {
    label: string;
    style?: ButtonStyle;
    onClick: () => void;
}
declare const Button: React.FunctionComponent<ButtonProps>;
export default Button;
