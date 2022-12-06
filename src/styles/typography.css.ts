import { style } from '@vanilla-extract/css';
import { vars } from '@theme';

export const headingXL = style({
    fontSize: '24px',
    lineHeight: '30px',
    fontWeight: vars.font.weight.bold
});

export const headingLarge = style({
    fontSize: '18px',
    lineHeight: '23px',
    fontWeight: vars.font.weight.bold
});

export const headingMedium = style({
    fontSize: '15px',
    lineHeight: '19px',
    fontWeight: vars.font.weight.bold
});

export const headingSmall = style({
    fontSize: '12px',
    lineHeight: '15px',
    letterSpacing: '2.4px',
    fontWeight: vars.font.weight.bold
});

export const bodyLarge = style({
    fontSize: '13px',
    lineHeight: '23px',
    fontWeight: vars.font.weight.normal
});

export const bodyMedium = style({
    fontSize: '12px',
    lineHeight: '15px',
    fontWeight: vars.font.weight.bold
});
