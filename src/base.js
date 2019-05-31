import { css } from 'styled-components';
import {
  primary, baseFont, baseLineHeight,
} from './vars';

export default css`
  :root, html, body {
    position: relative;
    min-height: 100%;
    max-width: 100vw;
    height: 100%;
    font-family: ${baseFont};
    line-height: ${baseLineHeight};
    font-weight: 300;
    --theme: ${primary};
  }

  button, p, i, a, h1, h2, h3, h4, h5, h6, b, sub, legend, sup {
    > .svg-inline--fa:not(:only-child) {
      margin-top: -.1em;
      margin-right: .6em;
      &:last-child {
        margin-left: .6em;
        margin-right: 0;
      }
    }
  }

  a[href], .link, :link, :any-link {
    text-decoration: none;
    transition: color .2s;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  img, picture {
    max-width: 100%;
    max-height: 100%;
    height: auto;
    user-select: none;
    image-rendering: auto;
  }

  @media print {
    *, *:before, *:after {
      background: transparent !important;
      color: #000000 !important;
      box-shadow: none !important;
      text-shadow: none !important;
    }
    a, a:visited { text-decoration: underline; }
    a[href]:after {
      content: " (" attr(href) ")";
    }
    abbr[title]:after {
      content: " (" attr(title) ")";
    }

    a[href^="#"]:after,
    a[href^="javascript:"]:after {
      content: "";
    }
    pre, blockquote {
      border: 1pt solid #999999;
      page-break-inside: avoid;
    }
    thead {
      display: table-header-group;
    }
    tr, img { page-break-inside: avoid; }
    img { max-width: 100% !important; }
    p, h2, h3 {
      orphans: 3;
      widows: 3;
    }
    h2, h3 {
      page-break-after: avoid;
    }
  }
`;
