import React, { memo } from 'react';

import { Tooltip as Tool } from './styles';
import TooltipProps from './interface';

const Tooltip: React.FC<TooltipProps> = ({ title, className, children }) => {
  return (
    <Tool className={className}>
      {children}
      <span>{title}</span>
    </Tool>
  );
};

export default memo(Tooltip);
