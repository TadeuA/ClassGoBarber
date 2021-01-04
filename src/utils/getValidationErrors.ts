import { ValidationError } from 'yup';
import { ErrorsProps } from './interface';

export default function getValidationErrors(err: ValidationError): ErrorsProps {
  const validationErrors: ErrorsProps = {};

  err.inner.forEach(error => {
    if (error.path) {
      validationErrors[error.path] = error.message;
    }
  });

  return validationErrors;
}
