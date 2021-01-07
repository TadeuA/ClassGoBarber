import React, { useEffect } from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';

import { setTimeout } from 'timers';
import { Toast as Div } from './styles';
import { ToastMessageProps } from './interface';
import { useToast } from '../../../hooks';

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />,
};

const Toast: React.FC<ToastMessageProps> = ({ toast, style }) => {
  const { removeToast } = useToast();
  const { id, type = 'info', description, title } = toast;

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, id]);
  return (
    <Div type={type} hasDescription={!!description} style={style}>
      {icons[type]}
      <div>
        <strong>{title}</strong>
        {description && description}
      </div>
      <button type="button" onClick={() => removeToast(id)}>
        <FiXCircle size={18} />
      </button>
    </Div>
  );
};

export default Toast;
