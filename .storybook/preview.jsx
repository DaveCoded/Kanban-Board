import React, { useState, createContext, useContext } from 'react';
import { lightTheme, darkTheme } from '@theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    }
};

const DarkModeContext = createContext(null);

const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

const ThemeProvider = ({ children }) => {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext) || {};
    return (
        <div className={darkMode ? darkTheme : lightTheme}>
            {children}
            <div>
                <button onClick={toggleDarkMode}>Toggle dark mode</button>
            </div>
        </div>
    );
};

export const decorators = [
    Story => (
        <DarkModeProvider>
            <ThemeProvider>
                <Story />
            </ThemeProvider>
        </DarkModeProvider>
    )
];
