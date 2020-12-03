import base from './base';
import reset from './reset';
import typography from './typography';
import utils, { padding, margin, fill } from './utils';

export { default as theme } from './theme';
export { ThemeWrapper as ThemeProvider } from './theme/ThemeWrapper';
export { Flex, Layout, Container } from './layout';

// Typography
export { default as Text } from './components/Text/Text';

// Basic components
export { default as Button } from './components/Button/Button';
export { default as Input } from './components/Input/Input';

export default {
  reset,
  base,
  typography,
  utils,
  padding,
  margin,
  fill,
};
