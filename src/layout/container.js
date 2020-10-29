import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
  max-width: ${({ theme }) => theme.containerWidth || '84rem'};
`;
