import { style } from '@vanilla-extract/css';
import { vars } from '@theme';

export const layoutWrapper = style({
    display: 'flex',
    alignItems: 'center', // ? Maybe just alignSelf the logo instead
    height: '97px',
    paddingLeft: '24px',
    paddingRight: '24px',
    borderBottom: `1px solid ${vars.baseColors.grey4}`
});

export const verticalDivider = style({
    width: '1px',
    height: '100%',
    margin: '0 32px',
    backgroundColor: vars.baseColors.grey4
});

export const buttonWrapper = style({
    marginLeft: 'auto'
});
