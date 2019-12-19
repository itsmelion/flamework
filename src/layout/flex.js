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

const flexRules = (rule = 'none') => {
  if (typeof rule === 'string') {
    return css`
      flex: ${flexNames[rule]};
    `;
  }

  if (typeof rule === 'boolean') {
    return css`
      flex: ${flexNames.flex};
    `;
  }

  return css`
    flex: 1 1 ${rule}%;
    max-width: ${rule}%;
  `;
};

export const Flex = styled.div`
  ${({ flex }) => flexRules(flex)}

  @media ${({theme}) => theme.mobile} {
    ${({ mobileFlex }) => flexRules(mobileFlex)}
  }
`;

export default styled.div`
  display: flex;
  flex-wrap: ${(props) => (props.wrap && 'wrap') || 'nowrap'};
  flex-direction: ${(column, reverse) => (column && 'column' && reverse && 'column-reverse')
    || (column && 'column')
    || (reverse && 'row-reverse') || 'row'};

  ${({ flex }) => flexRules(flex)}
  ${(props) => align(props.align)}
  ${(props) => props.fill && fill}

  @media ${({theme}) => theme.mobile} {
    flex-wrap: ${(props) => (props.mobileWrap && 'wrap') || 'nowrap'};
    flex-direction: ${(mobileRow, mobileReverse) => (mobileRow && 'row' && mobileReverse && 'row-reverse')
      || (mobileRow && 'row')
      || (mobileReverse && 'column-reverse') || 'column'};

    ${({ mobileFlex }) => flexRules(mobileFlex)}
    ${(props) => align(props.mobileAlign)}
  }
`;
