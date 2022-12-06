import { createGlobalTheme, createTheme, createThemeContract } from '@vanilla-extract/css';

const hslColors = {
    white: '0deg 0% 100%',
    black: '237deg 100% 4%',
    grey0: '235deg 16% 15%',
    grey1: '235deg 12% 19%',
    grey2: '236deg 11% 27%',
    grey3: '216deg 15% 57%',
    grey4: '221deg 69% 94%',
    grey5: '220deg 69% 97%',
    greyStroke: '216deg 15 57',
    mainPurple: '242deg 48% 58%',
    lightPurple: '243° 100% 82%',
    red: '0deg 78% 63%',
    lightRed: '0deg 100% 80%'
};

const baseColors: typeof hslColors = {
    white: `hsl(${hslColors.white})`,
    black: `hsl(${hslColors.black})`,
    grey0: `hsl(${hslColors.grey0})`,
    grey1: `hsl(${hslColors.grey1})`,
    grey2: `hsl(${hslColors.grey2})`,
    grey3: `hsl(${hslColors.grey3})`,
    grey4: `hsl(${hslColors.grey4})`,
    grey5: `hsl(${hslColors.grey5})`,
    greyStroke: `hsl(${hslColors.greyStroke} / 0.25)`,
    mainPurple: `hsl(${hslColors.mainPurple})`,
    lightPurple: `hsl(${hslColors.lightPurple})`,
    red: `hsl(${hslColors.red})`,
    lightRed: `hsl(${hslColors.lightRed})`
};

const global = createGlobalTheme('html', {
    dropShadow: '0px 4px 6px 0px hsl(220deg 40% 35% / 0.1)',
    fonts: {
        heading: 'Inter, sans-serif',
        body: 'system-ui'
    }
});

// todo: fill these out from the design system
const colors = createThemeContract({
    text: {
        primary: null,
        secondary: null
    },
    button: {
        primary: null,
        primaryHover: null,
        primaryText: null,
        secondary: null,
        secondaryHover: null,
        secondaryText: null,
        danger: null,
        dangerHover: null
    },
    checkbox: {
        background: null,
        backgroundCompleted: null,
        stroke: null,
        strokeHover: null,
        strokeCompleted: null,
        check: null
    },
    subtask: {
        background: {
            idle: null,
            hovered: null,
            completed: null
        }
    },
    textInput: {
        border: null,
        placeholder: null,
        text: null,
        error: null
    },
    select: {
        border: null,
        borderActive: null,
        carret: null,
        selectedText: null,
        optionText: null,
        menuBackground: null
    }
});

export const lightTheme = createTheme(colors, {
    text: {
        primary: baseColors.black,
        secondary: baseColors.grey3
    },
    button: {
        primary: baseColors.mainPurple,
        primaryHover: baseColors.lightPurple,
        primaryText: baseColors.white,
        secondary: `hsl(${hslColors.mainPurple} / 0.1)`,
        secondaryHover: `hsl(${hslColors.mainPurple} / 0.25)`,
        secondaryText: baseColors.mainPurple,
        danger: baseColors.red,
        dangerHover: baseColors.lightRed
    },
    checkbox: {
        background: baseColors.white,
        backgroundCompleted: baseColors.mainPurple,
        stroke: baseColors.greyStroke,
        strokeHover: 'transparent',
        strokeCompleted: baseColors.mainPurple,
        check: baseColors.white
    },
    subtask: {
        background: {
            idle: baseColors.grey5,
            hovered: `hsl(${hslColors.mainPurple} / 0.25)`,
            completed: baseColors.grey5
        }
    },
    textInput: {
        border: hslColors.greyStroke,
        placeholder: `hsl(${hslColors.black} / 0.25)`,
        text: baseColors.black,
        error: baseColors.red
    },
    select: {
        border: baseColors.greyStroke,
        borderActive: baseColors.mainPurple,
        carret: baseColors.mainPurple,
        selectedText: baseColors.black,
        optionText: baseColors.grey3,
        menuBackground: baseColors.white
    }
});

export const darkTheme = createTheme(colors, {
    text: {
        primary: baseColors.white,
        secondary: baseColors.grey3
    },
    button: {
        primary: baseColors.mainPurple,
        primaryHover: baseColors.lightPurple,
        primaryText: baseColors.white,
        secondary: baseColors.white,
        secondaryHover: baseColors.white,
        secondaryText: baseColors.mainPurple,
        danger: baseColors.red,
        dangerHover: baseColors.lightRed
    },
    checkbox: {
        background: baseColors.grey1,
        backgroundCompleted: baseColors.mainPurple,
        stroke: baseColors.greyStroke,
        strokeHover: baseColors.grey1,
        strokeCompleted: baseColors.mainPurple,
        check: baseColors.white
    },
    subtask: {
        background: {
            idle: baseColors.grey0,
            hovered: `hsl(${hslColors.mainPurple} / 0.25)`,
            completed: baseColors.grey0
        }
    },
    textInput: {
        border: baseColors.greyStroke,
        placeholder: `hsl(${hslColors.white} / 0.25)`,
        text: baseColors.white,
        error: baseColors.red
    },
    select: {
        border: baseColors.greyStroke,
        borderActive: baseColors.mainPurple,
        carret: baseColors.mainPurple,
        selectedText: baseColors.white,
        optionText: baseColors.grey3,
        menuBackground: baseColors.grey0
    }
});

export const vars = { ...global, baseColors, colors };
