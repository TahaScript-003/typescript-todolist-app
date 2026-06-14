import { ComponentProps } from "react";

type Button = ComponentProps<"button"> & {
    buttonTitle: string
}

const Button = ({ type, value }: Button) => {
    return (
        <button value={value} type={type} >Click</button>
    );
}

export default Button;
