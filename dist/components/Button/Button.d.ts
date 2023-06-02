type ButtonStyle = {
    [property: string]: string;
};
export type ButtonProps = {
    label: string;
    style?: ButtonStyle;
    onClick: () => void;
};
export declare const Button: ({ label, style, onClick }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
