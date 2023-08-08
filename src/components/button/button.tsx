import { FC } from 'react';
import styles from './button.module.css';
import { ReactNode } from "react";

type TButton = {
    width?: string,
    height?: string,
    color?: string,

    readonly children: ReactNode,
    type: string,
    onClick?: () => void
}

const Button: FC<TButton> = ({ width, height, color, type, onClick, children }) => {
    const style = {
        width,
        height,
        backgroundColor: color
    }

    const buttonTypes: { [key: string]: any } = {
        'one': styles['button-one'],
        'two': styles['button-two'],
        'three': styles['button-three'],
        'four': styles['button-four'],
        'five': styles['button-five'],
        'six': styles['button-six'],
    }

    return (
        <button className={`${styles.button} ${buttonTypes[type]}`} onClick={onClick}>
            {children}
        </button >
    );
}

export default Button;
