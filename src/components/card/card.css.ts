import { style } from '@vanilla-extract/css';
import { bodyMedium, headingMedium } from '@styles';
import { vars } from '@theme';

export const card = style({
    backgroundColor: vars.colors.card.background,
    color: vars.colors.text.primary,
    padding: '16px 23px',
    borderRadius: 8,
    boxShadow: vars.cardShadow
});

export const title = style([
    headingMedium,
    {
        color: vars.colors.text.primary
    }
]);

export const description = style([
    bodyMedium,
    {
        color: vars.colors.text.secondary
    }
]);
