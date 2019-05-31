import { css } from 'styled-components';
import { desktop, mobile } from './vars';

export default css`
  .w100, .w-100 { width: 100%; }
  .h100, .h-100 { height: 100%; }

  .right, .text-right { text-align: right; }
  .center, .text-center { text-align: center; }
  .left, .text-left { text-align: left; }

  .cap, .capitalize { text-transform: capitalize }
  .lower, .lowercase { text-transform: lowercase }
  .upper, .uppercase { text-transform: uppercase }

  .cover-fit {
    object-fit: cover;
    object-position: center;
  }

  .contain-fit {
    object-fit: contain;
    object-position: center;
  }

  .videoWrapper {
    position: relative;
    /* 16:9 */
    padding-bottom: 56.25%;
    height: 100%;
    overflow: hidden;
    iframe,
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .inline { display: inline; }
  .block { display: block; }
  .inline-block { display: inline-block; }

  .show-lg, .show-desktop
  .show-sm, .show-mobile {
    display: none;
  }

  @media ${mobile} {
    .show-sm, .show-mobile {
      display: inherit;
    }
    .hide-sm, .hide-mobile {
      display: none;
    }
  }

  @media ${desktop} {
    .show-lg, .show-desktop {
      display: inherit;
    }
    .hide-lg, .hide-desktop {
      display: none;
    }
  }
`;

export const fill = css`
  position: relative;
  min-height: 100%;
  height: 100%;
  width: 100%;
  margin: 0;
`;

export const padding = css`
  .p02 { padding: .25rem; }
  .ph02 { padding-left: .25rem; padding-right: .25rem; }
  .pv02 { padding-top: .25rem; padding-bottom: .25rem; }
  .pt02 { padding-top: .25rem; }
  .pr02 { padding-right: .25rem; }
  .pb02 { padding-bottom: .25rem; }
  .pl02 { padding-left: .25rem; }

  .p05 { padding: .5rem; }
  .ph05 { padding-left: .5rem; padding-right: .5rem; }
  .pv05 { padding-top: .5rem; padding-bottom: .5rem; }
  .pt05 { padding-top: .5rem; }
  .pr05 { padding-right: .5rem; }
  .pb05 { padding-bottom: .5rem; }
  .pl05 { padding-left: .5rem; }

  .p1 { padding: 1rem; }
  .ph1 { padding-left: 1rem; padding-right: 1rem; }
  .pv1 { padding-top: 1rem; padding-bottom: 1rem; }
  .pt1 { padding-top: 1rem; }
  .pr1 { padding-right: 1rem; }
  .pb1 { padding-bottom: 1rem; }
  .pl1 { padding-left: 1rem; }

  .p2 { padding: 2rem; }
  .ph2 { padding-left: 2rem; padding-right: 2rem; }
  .pv2 { padding-top: 2rem; padding-bottom: 2rem; }
  .pt2 { padding-top: 2rem; }
  .pr2 { padding-right: 2rem; }
  .pb2 { padding-bottom: 2rem; }
  .pl2 { padding-left: 2rem; }
`;

export const margin = css`
  .m02 { margin: .25rem; }
  .mv02 { margin-top: .25rem; margin-bottom: .25rem; }
  .mh02 { margin-left: .25rem; margin-right: .25rem; }
  .mt02 { margin-top: .25rem; }
  .mr02 { margin-right: .25rem; }
  .mb02 { margin-bottom: .25rem; }
  .ml02 { margin-left: .25rem; }

  .m05 { margin: .5rem; }
  .mv05 { margin-top: .5rem; margin-bottom: .5rem; }
  .mh05 { margin-left: .5rem; margin-right: .5rem; }
  .mt05 { margin-top: .5rem; }
  .mr05 { margin-right: .5rem; }
  .mb05 { margin-bottom: .5rem; }
  .ml05 { margin-left: .5rem; }

  .m1 { margin: 1rem; }
  .mv1 { margin-top: 1rem; margin-bottom: 1rem; }
  .mh1 { margin-left: 1rem; margin-right: 1rem; }
  .mt1 { margin-top: 1rem; }
  .mr1 { margin-right: 1rem; }
  .mb1 { margin-bottom: 1rem; }
  .ml1 { margin-left: 1rem; }

  .m2 { margin: 2rem; }
  .mv2 { margin-top: 2rem; margin-bottom: 2rem; }
  .mh2 { margin-left: 2rem; margin-right: 2rem; }
  .mt2 { margin-top: 2rem; }
  .mr2 { margin-right: 2rem; }
  .mb2 { margin-bottom: 2rem; }
  .ml2 { margin-left: 2rem; }
`;
