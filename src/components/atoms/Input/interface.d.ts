import { InputHTMLAttributes } from 'react';

export default interface InputProps
  extends InputHTMLAttributes<HTMLInputAttributes> {
  name: string;
  setState?: Dispatch;
  setBlur?: Dispatch;
  setFocus?: Dispatch;
  setError?: Dispatch;
}
