import styled, { css } from 'styled-components';
import align from './align';
import { fill } from '../utils';

const flexNames = {
  none: '0 0 auto',
  flex: '1',
  nogrow: '0 1 auto',
  grow: '1 1 100%',
  initial: '0 1 auto',
  auto: '1 1 auto',
  stretch: '1 1 auto',
  noshrink: '1 0 auto',
};

const flexDirection = (row, reverse) => {
  const direction = (row && 'row' && reverse && 'row-reverse')
  || (reverse && 'column-reverse')
  || 'column';

  return css`flex-direction: ${direction}`;
};

const Wrap = (wrap) => (wrap ? 'wrap' : 'nowrap');

const flexRules = (rule = 'none') => {
  if (typeof rule === 'string') {
    return css`flex: ${flexNames[rule]};`;
  }

  if (typeof rule === 'boolean') {
    return css`flex: ${flexNames.flex};`;
  }

  return css`
    flex: 1 1 ${rule}%;
    max-width: ${rule}%;
  `;
};

export const Flex = styled.div`
  ${({ flex }) => flexRules(flex)}

  @media ${({ theme }) => theme.mobile} {
    ${({ mobileFlex }) => flexRules(mobileFlex)}
  }
`;

export default styled.div`
  display: flex;
  ${({ row, reverse }) => flexDirection(row, reverse)};
  flex-wrap: ${({ wrap }) => Wrap(wrap)};
  ${({ flex }) => flexRules(flex)}
  ${(props) => align(props.align)}
  ${(props) => props.fill && fill}

  @media ${({ theme }) => theme.mobile} {
    ${({ mobileRow, mobileReverse }) => flexDirection(mobileRow, mobileReverse)};
    flex-wrap: ${({ mobileWrap }) => Wrap(mobileWrap)};
    ${({ mobileFlex }) => flexRules(mobileFlex)}
    ${({ mobileAlign }) => align(mobileAlign)}
  }
`;
