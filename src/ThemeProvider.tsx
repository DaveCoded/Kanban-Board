import { PropsWithChildren, useContext } from 'react';
import { darkTheme, lightTheme } from '@theme';
import { DarkModeContext } from './context/DarkModeContext';

export function ThemeProvider({ children }: PropsWithChildren) {
    const { darkMode } = useContext(DarkModeContext) || {};

    return <div className={darkMode ? darkTheme : lightTheme}>{children}</div>;
}
