import styled from 'styled-components';
import { shadow } from '../vars';

export default styled.button`
  user-select: none;
  line-height: 1.2;
  letter-spacing: -.2pt;
  font-weight: 300;
  font-size: 1.1em;
  color: currentColor;
  width: auto;
  background-color: white;
  background-color: var(--theme, white);
  display: inherit;
  white-space: nowrap;
  vertical-align: middle;
  border: 1pt solid transparent;
  padding: .4em .8em;
  border-radius: .15em;
  transition: color .1s linear, background-color .15s ease, border-color .15s ease, box-shadow .15s ease-in-out;
  cursor: pointer;
  &:hover { ${shadow} }
`;
