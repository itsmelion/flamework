import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'flamework';
import GlobalStyles from './Global.styled';

interface Props {
  children: React.ReactChild | React.ReactChildren
}

const ThemeWrapper: React.FunctionComponent<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
    <GlobalStyles />
  </ThemeProvider>
);

export default ThemeWrapper;
