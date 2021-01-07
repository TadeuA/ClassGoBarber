import { ToastMessage } from '../../../hooks/interface';

export interface ToastProps {
  type?: 'success' | 'error' | 'info';
  hasDescription?: boolean;
}

export interface ToastMessageProps {
  toast: ToastMessage;
  style: object;
}
