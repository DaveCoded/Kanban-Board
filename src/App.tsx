import { PropsWithChildren, useContext } from 'react';
import { lightTheme, darkTheme } from './theme.css';
import { DarkModeContext, DarkModeProvider } from './context/DarkModeContext';
import { Nested } from './components/nested';

function App() {
    return (
        <DarkModeProvider>
            <ThemeProvider>
                <Nested />
            </ThemeProvider>
        </DarkModeProvider>
    );
}

export default App;

function ThemeProvider({ children }: PropsWithChildren) {
    const { darkMode } = useContext(DarkModeContext) || {};

    return <div className={darkMode ? darkTheme : lightTheme}>{children}</div>;
}
