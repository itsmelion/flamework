import * as vars from './vars';

export default {
  // Colors
  primary: vars.green,
  yellow: vars.yellow,
  red: vars.red,
  green: vars.green,
  textColor: vars.textColor,

  // Units
  radius: vars.radius,

  // Breakpoints
  containerWidth: vars.containerWidth,
  mobileBreakpoint: vars.mobileBreakpoint,
  desktopBreakpoint: vars.desktopBreakpoint,
  mobile: `${vars.mobileBreakpoint}rem`,
  desktop: `${vars.desktopBreakpoint}rem`,

  // Typography
  baseFont: vars.baseFont,
  baseLineHeight: vars.baseLineHeight,
  baseFontSize: vars.baseFontSize,
};
