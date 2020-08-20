import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: ${({ width }) => width || 'auto'};
`;

export const Label = styled.label`
  font-size: .8em;
  display: block;
  margin-bottom: .25em;
  margin-left: .5em;
`;

export const InputElement = styled.input`
  padding: .5em .8em;
  border: 2pt solid #00000010;
  background: #FDFDFD;
  border-radius: .5em;
  width: 100%;
`;
