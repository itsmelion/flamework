import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';
import GlobalStyles from './Global.styled';

export const ThemeWrapper: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default ThemeWrapper;
