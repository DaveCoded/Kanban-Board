import { createContext, PropsWithChildren, useState } from 'react';

interface ContextValue {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const DarkModeContext = createContext<ContextValue | null>(null);

const DarkModeProvider = ({ children }: PropsWithChildren) => {
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

export { DarkModeContext, DarkModeProvider };
