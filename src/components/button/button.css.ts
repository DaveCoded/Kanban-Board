import { vars } from '@theme';
import { style } from '@vanilla-extract/css';

export const buttonClass = style({
    paddingLeft: '24px',
    paddingRight: '24px',
    backgroundColor: vars.colors.button.primary,
    borderRadius: '500px',
    color: vars.colors.button.primaryText
});

export const small = style({
    paddingTop: '8px',
    paddingBottom: '9px'
});

export const large = style({
    paddingTop: '14px',
    paddingBottom: '15px'
});
