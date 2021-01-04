import React, { memo } from 'react';

import { Button as Bu } from './styles';
import ButtonProps from './interface';

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Bu type="button" {...rest}>
      {children}
    </Bu>
  );
};

export default memo(Button);
