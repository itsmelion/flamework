import { css } from 'styled-components';

export default css`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-style: normal;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ol, ul, li {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root, html, body {
    line-height: 1.2;
    text-size-adjust: 100%;
    color: inherit;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba($black, 0);
  }

  svg { shape-rendering: geometricPrecision;  }

  @at-root {
    @-ms-viewport {
      width: device-width;
    }
  }

  [tabindex="-1"]:focus {
    outline: 0 !important;
  }

  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
    &:-webkit-any-link {
      color: currentColor;
    }
  }

  svg:not(:root) {
    overflow: hidden;
    vertical-align: middle;
  }

  input,
  button,
  select,
  optgroup,
  textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  html [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }


  button {
    &::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
      padding: 0;
      border-style: none;
    }

    &:focus {
      outline: 1px dotted;
      outline: 5px auto -webkit-focus-ring-color;
    }
  }


  input[type="radio"],
  input[type="checkbox"] {
    box-sizing: border-box;
    padding: 0;
  }


  input[type="date"],
  input[type="time"],
  input[type="datetime-local"],
  input[type="month"] {
    -webkit-appearance: listbox;
  }

  textarea {
    overflow: auto;
    resize: vertical;
  }

  fieldset {
    padding: 0;
    margin: 0;
    border: 0;
  }

  progress {
    vertical-align: baseline;
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  ::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
  }

  [hidden] {
    display: none !important;
  }
`;
