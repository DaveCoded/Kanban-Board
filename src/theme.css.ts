import { createGlobalTheme, createTheme, createThemeContract } from '@vanilla-extract/css';

const global = createGlobalTheme('html', {
    // todo: change these as needed
    space: {
        none: '0px',
        small: '4px',
        medium: '8px',
        large: '12px'
    },
    fonts: {
        heading: 'Inter, sans-serif',
        body: 'system-ui'
    }
});

// todo: fill these out from the design system
const colors = createThemeContract({
    background: null,
    text: null
});

export const lightTheme = createTheme(colors, {
    background: 'white',
    text: 'blue'
});

export const darkTheme = createTheme(colors, {
    background: 'black',
    text: 'white'
});

export const vars = { ...global, colors };
