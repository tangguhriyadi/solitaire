import React from "react";

interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
    text: string;
}

const Button: React.FC<ButtonProps> = (props) => {
    const { text, ...rest } = props;
    return <button {...rest}>{text}</button>;
};

export default Button;
