import reset from './reset';
import base from './base';
import typography from './typography';
import utils, { padding, margin, fill } from './utils';

export { default as theme } from './theme';
export { Flex, Layout, Container } from './layout';

// Typography
export { default as Text } from './components/Text/Text';

// Basic components
export { Button } from './styles';
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
