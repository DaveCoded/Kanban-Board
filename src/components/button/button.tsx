import { PropsWithChildren } from 'react';
import { buttonClass, large, small } from './button.css';

interface ButtonProps extends PropsWithChildren {
    size?: 'l' | 's';
    disabled?: boolean;
}

export const Button = ({ size = 's', disabled = false, children }: ButtonProps) => (
    <button className={`${buttonClass} ${size === 's' ? small : large}`} disabled={disabled}>
        {children}
    </button>
);
