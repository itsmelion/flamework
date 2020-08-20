import * as React from 'react';

import Txt from './Text.styled';

const Text: React.FC = ({
  children, ...props
}): JSX.Element => (
  <Txt {...props}>
    {children}
  </Txt>
);

export default Text;
