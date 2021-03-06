import * as React from 'react';

import InputErrors from './InputErrors';
import { Wrapper, Label, InputElement } from './Input.styled';

interface IContainerProps {
  width: string|number,
  className: string,
}

interface IError {
  type: string,
}

type InputTypes = 'color'|
'date'|
'datetime-local'|
'email'|
'hidden'|
'image'|
'month'|
'number'|
'password'|
'search'|
'tel'|
'text'|
'time'|
'url'|
'week'|
'file';

export interface IProps {
  id: string;
  type: InputTypes;
  name?: string,
  label?: string;
  placeholder?: string;
  children?: React.ReactNode;
  containerProps?: IContainerProps;
  required?: boolean,
  readOnly?: boolean,
  disabled?: boolean,
  autoComplete?: string,
  value?: string|number,
  innerRef?: never,
  ref?: never,
  error?: IError,
}

const Input = ({
  label, id, type, children, name, containerProps,
  ref, innerRef, error, ...props
}: IProps) => (
  <Wrapper {...containerProps}>
    {label && <Label htmlFor={id}>{label}</Label>}

    <InputElement
      aria-invalid={error ? 'true' : 'false'}
      id={id}
      name={name || id}
      type={type}
      {...props}
      ref={innerRef || ref}
    />

    <InputErrors error={error} />

    {children}
  </Wrapper>
);

Input.defaultProps = {
  type: 'text',
  label: undefined,
  children: null,
  name: undefined,
  required: false,
  disabled: false,
  readOnly: false,
  placeholder: undefined,
  value: undefined,
  autoComplete: 'on',
  containerProps: {},
  innerRef: undefined,
  ref: undefined,
  error: undefined,
};

export default React.memo(Input);
