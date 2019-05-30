import styled, { css } from 'styled-components';

export const containerWidth = 80;
export const mobileBreakpoint = 69; // ~780px
export const desktopBreakpoint = mobileBreakpoint + 0.01;
export const mobile = `screen and (max-width = ${mobileBreakpoint})`;
export const desktop = `screen and (min-width = ${desktopBreakpoint})`;

export const radius = '6pt';

export const black = '95%, 95%, 100%';
export const black8 = `rgba(${black}, 0.70)`;
export const black5 = `rgba(${black}, 0.50)`;
export const black3 = `rgba(${black}, 0.25)`;
export const black1 = `rgba(${black}, 0.10)`;

export const white = '95%, 95%, 100%';
export const white7 = `rgba(${white}, 0.75)`;
export const white5 = `rgba(${white}, 0.50)`;
export const white3 = `rgba(${white}, 0.30)`;
export const white1 = `rgba(${white}, 0.10)`;

export const column = '[column], [layout=column], .layout-column, .column';
export const row = '[row], [layout=row], .layout-row, .row';
export const mobileColumn = '[mobile-column], [mobile-layout=column], .mobile-layout-column, .mobile-column';
export const mobileRow = '[mobile-row], [mobile-layout=row], .mobile-layout-row, .mobile-row';

export const baseFont = `
  "Assistant",
  "Segoe UI",
  "Open Sans",
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  "Roboto",
  "Helvetica Neue", Arial, sans-serif,
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;
export const baseLineHeight = 1.4;
export const baseFontSize = '100%';

export const yellow = '#FFC300';
export const red = '#da0642';
export const green = '#27e486';

export const inputPlaceholderColor = (color = black3) => {
  const pseudos = [
    '::-webkit-input-placeholder',
    ':-moz-placeholder',
    '::-moz-placeholder',
    ':-ms-input-placeholder',
    '::-webkit-input-placeholder',
  ];

  // It is important to export every pseudo within its own block, because otherwise the placeholder
  // won't be set on the most browsers.
  pseudos.forEach(pseudo => css`
    &${pseudo} {
      color: ${color};
      text-shadow: none;
    }
  `);
};

export const dragCursor = css`
  cursor: url('/images/drag.png') 16 9, ew-resize;
`;

export const resetButton = css`
  appearance: none;
  outline: 0;
  box-shadow: none;
  color: currentColor;
  border: none;
  border-radius: 0;
  background-color: transparent;
`;

export const selection = (color, bg) => css`
  &::selection {
    color: ${color};
    background: ${bg};
    text-shadow: none;
  }

  &::-moz-selection {
    color: ${color};
    background: ${bg};
    text-shadow: none;
  }
`;
