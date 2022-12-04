import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import { heading } from './styles.css';

export function Nested() {
    const { toggleDarkMode } = useContext(DarkModeContext) || {};

    return (
        <div>
            <h1 className={heading}>Hello I'm nested</h1>
            <button onClick={toggleDarkMode}>Toggle theme</button>
        </div>
    );
}
