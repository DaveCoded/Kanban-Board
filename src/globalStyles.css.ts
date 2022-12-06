import { globalStyle, globalFontFace } from '@vanilla-extract/css';
import { vars } from '@theme';

const plusJakartaSans = 'PlusJakartaSans';

globalFontFace(plusJakartaSans, {
    src: 'local("Plus Jakarta Sans"), url(/fonts/PlusJakartaSans-BoldItalic.ttf)',
    fontWeight: 700,
    fontStyle: 'italic'
});

globalFontFace(plusJakartaSans, {
    src: 'local("Plus Jakarta Sans"), url(/fonts/PlusJakartaSans-MediumItalic.ttf)',
    fontWeight: 500,
    fontStyle: 'italic'
});

globalFontFace(plusJakartaSans, {
    src: 'local("Plus Jakarta Sans"), url(/fonts/PlusJakartaSans-Bold.ttf)',
    fontWeight: 700,
    fontStyle: 'normal'
});

globalFontFace(plusJakartaSans, {
    src: 'local("Plus Jakarta Sans"), url(/fonts/PlusJakartaSans-Medium.ttf)',
    fontWeight: 500,
    fontStyle: 'normal'
});

globalStyle('h1, h2, h3, h4, h5, p', {
    margin: 0
});

globalStyle('body', {
    fontFamily: vars.font.family
});
