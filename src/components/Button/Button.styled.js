import styled, { css } from 'styled-components';
import { shadow } from '../../vars';

export const Button = styled.button`
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

  &:focus {
    box-shadow: 0 0 0 1.5pt rgb(0 125 250 / 60%);
    outline: none;
  }

  ${({ theme }) => {
    if (theme.primary) return css`background-color: var(--theme, ${theme.primary});`;
    return css`background-color: var(--theme);`;
  }};

  &:hover { ${shadow} }
`;

export default Button;
