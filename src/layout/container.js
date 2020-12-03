import styled from 'styled-components';

const container = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
  max-width: ${({ theme }) => theme.containerWidth || '84rem'};
`;

export default container;
