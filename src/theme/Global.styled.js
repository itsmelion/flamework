import { createGlobalStyle } from 'styled-components';
import flamework from 'flamework';

export default createGlobalStyle`
  ${flamework.reset}
  ${flamework.typography}
  ${flamework.utils}
  ${flamework.padding}
  ${flamework.margin}
  ${flamework.fill}

  :root, html, body {
    height: 100%;
  }

  html, body, #root {
    --theme: ${({ theme: t }) => t.primary};
    --textColor: ${({ theme: t }) => t.textColor};
    font-family: ${({ theme: t }) => t.baseFont};
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 0 1 100%;
    color: ${({ theme: t }) => t.textColor};
  }

  .ReactModal__Overlay {
    opacity: 0;
    z-index: 998;
    transition: opacity 200ms ease-in-out;
    will-change: opacity;
  }

  .ReactModal__Overlay--after-open{
    opacity: 1;
    will-change: opacity;
  }

  .ReactModal__Overlay--before-close{
    opacity: 0;
    will-change: opacity;
  }

  .ReactModal__Content {
    overflow-y: auto;
    z-index: 999;
    max-height: 90vh;
    transform: translate3d(0, 100%, 0);
    transition: transform 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .ReactModal__Content--after-open {
    will-change: transform;
    transform: translate3d(0, 0, 0);
  }

  .pulse {
    will-change: opacity;
    opacity: 1;
    animation-name: pulse;
    animation-duration: .5s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
  }

  @keyframes pulse {
    from { opacity: 1; }
    to { opacity: .1; }
  }
`;
