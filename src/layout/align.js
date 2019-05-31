import { css } from 'styled-components';

export default (axis = 'start stretch') => {
  switch (axis) {
    case 'start start':
      return css`
        justify-content: flex-start;
        align-items: flex-start;
        align-content: flex-start;
      `;
    case 'start stretch':
      return css`
        justify-content: flex-start;
        align-content: stretch;
        align-items: stretch;
      `;
    case 'start center':
      return css`
        justify-content: flex-start;
        align-items: center;
        align-content: center;
      `;
    case 'start end':
      return css`
        justify-content: flex-start;
        align-content: flex-end;
        align-items: flex-end;
      `;
    case 'center start':
      return css`
        justify-content: center;
        align-items: flex-start;
        align-content: flex-start;
      `;
    case 'center stretch':
      return css`
        justify-content: center;
        align-content: stretch;
        align-items: stretch;
      `;
    case 'center center':
      return css`
        justify-content: center;
        align-items: center;
        align-content: center;
      `;
    case 'center end':
      return css`
        justify-content: center;
        align-content: flex-end;
        align-items: flex-end;
      `;
    case 'end start':
      return css`
        justify-content: flex-end;
        align-items: flex-start;
        align-content: flex-start;
      `;
    case 'end stretch':
      return css`
        justify-content: flex-end;
        align-content: stretch;
        align-items: stretch;
      `;
    case 'end center':
      return css`
        justify-content: flex-end;
        align-items: center;
        align-content: center;
      `;
    case 'end end':
      return css`
        justify-content: flex-end;
        align-content: flex-end;
        align-items: flex-end;
      `;
    case 'between start':
      return css`
        justify-content: space-between;
        align-items: flex-start;
        align-content: flex-start;
      `;
    case 'between stretch':
      return css`
        justify-content: space-between;
        align-content: stretch;
        align-items: stretch;
      `;
    case 'between center':
      return css`
        justify-content: space-between;
        align-items: center;
        align-content: center;
      `;
    case 'between end':
      return css`
        justify-content: space-between;
        align-content: flex-end;
        align-items: flex-end;
      `;
    case 'around start':
      return css`
        justify-content: space-around;
        align-items: flex-start;
        align-content: flex-start;
      `;
    case 'around stretch':
      return css`
        justify-content: space-around;
        align-content: stretch;
        align-items: stretch;
      `;
    case 'around center':
      return css`
        justify-content: space-around;
        align-items: center;
        align-content: center;
      `;
    case 'around end':
      return css`
        justify-content: space-around;
        align-content: flex-end;
        align-items: flex-end;
      `;
    case 'even start':
      return css`
        justify-content: space-evenly;
        align-items: flex-start;
        align-content: flex-start;
      `;
    case 'even stretch':
      return css`
        justify-content: space-evenly;
        align-content: stretch;
        align-items: stretch;
      `;
    case 'even center':
      return css`
        justify-content: space-evenly;
        align-items: center;
        align-content: center;
      `;
    case 'even end':
      return css`
        justify-content: space-evenly;
        align-content: flex-end;
        align-items: flex-end;
      `;
    default:
      return css`
        justify-content: flex-start;
        align-content: stretch;
        align-items: stretch;
      `;
  }
};
