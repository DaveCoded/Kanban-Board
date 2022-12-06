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

// todo: this should be its own file for ease of reuse in Storybook files (for instance)
// todo: look up if there's an easy way to wrap all Storybook files in this provider
export function ThemeProvider({ children }: PropsWithChildren) {
    const { darkMode } = useContext(DarkModeContext) || {};

    return <div className={darkMode ? darkTheme : lightTheme}>{children}</div>;
}
