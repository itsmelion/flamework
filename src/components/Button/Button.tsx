import * as React from 'react';

import Wrapper from './Button.styled';

const Button: React.FC<ButtonPropTypes> = ({
  title,
  children,
  type,
  ...props
}): JSX.Element => (
  <Wrapper type={type} {...props}>
    {children || title}
  </Wrapper>
);

Button.defaultProps = {
  title: 'I am a Button',
  type: 'button',
};

export default React.memo(Button);

interface ButtonPropTypes {
  title: string,
  type: TypesAvailable;
  children?: React.ReactNode;
  disabled?: boolean,
}

enum typesAvailable {
  button,
  submit,
  reset,
}
type TypesAvailable = keyof typeof typesAvailable;
