import { PropsWithChildren, useContext } from 'react';
import { DarkModeContext, DarkModeProvider } from './context/DarkModeContext';
import { Nested } from './components/nested';
import { lightTheme, darkTheme } from './theme.css';
import './globalStyles.css';

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

export function ThemeProvider({ children }: PropsWithChildren) {
    const { darkMode } = useContext(DarkModeContext) || {};

    return <div className={darkMode ? darkTheme : lightTheme}>{children}</div>;
}
