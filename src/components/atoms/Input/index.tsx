import React, { memo, useEffect, useRef, useCallback } from 'react';
import { useField } from '@unform/core';
import { Input as In } from './styles';
import InputProps from './interface';

const Input: React.FC<InputProps> = ({
  name,
  setState,
  setBlur,
  setFocus,
  setError,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleInputBlur = useCallback(() => {
    setBlur(false);

    if (setState) {
      setState(!!inputRef.current?.value);
    }
  }, [setState, setBlur]);

  const handleInputFocus = useCallback(() => {
    setFocus(true);
    if (setState) {
      console.log('');
    }
  }, [setState, setFocus]);
  setError(error);
  return (
    <In
      name={name}
      {...rest}
      ref={inputRef}
      defaultValue={defaultValue}
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
    />
  );
};

export default memo(Input);
