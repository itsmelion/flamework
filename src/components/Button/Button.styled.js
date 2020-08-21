import styled, { css } from 'styled-components';
import { shadow } from '../../vars';

export default styled.button`
  width: auto;
  user-select: none;
  line-height: 1.2;
  letter-spacing: -.2pt;
  font-weight: 600;
  font-size: 1.1em;
  white-space: nowrap;
  color: currentColor;
  display: inherit;
  vertical-align: middle;
  border: 1pt solid transparent;
  padding: .4em .8em;
  border-radius: .15em;
  cursor: pointer;
  background-color: white;
  transition: color .1s linear,
    background-color .15s ease,
    border-color .15s ease,
    box-shadow .15s ease-in-out;

  ${({ theme }) => {
    if (theme.primary) return css`background-color: var(--theme, ${theme.primary});`;
    return css`background-color: var(--theme);`;
  }};

  &:hover { ${shadow} }
`;
