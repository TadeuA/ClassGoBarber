import React, { useState } from 'react';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, Error } from './styles';
import { Input } from '../../atoms';
import InputIconProps from './interface';

const InputIcon: React.FC<InputIconProps> = ({ icon: Icon, name, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [error, setError] = useState('');
  return (
    <Container isErrors={!!error} isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <Input
        name={name}
        {...rest}
        setState={setIsFilled}
        setBlur={setIsFocused}
        setFocus={setIsFocused}
        setError={setError}
      />
      {error && (
        <Error title={error}>
          <FiAlertCircle size={20} />
        </Error>
      )}
    </Container>
  );
};

export default InputIcon;
