import styled from 'styled-components';

export default styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: ${({ theme }) => theme.containerWidth || '84rem'};
  width: 100%;
`;
