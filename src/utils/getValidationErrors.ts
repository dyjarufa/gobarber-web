import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string; // Forma dinâmica - recebo qualquer string
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationError: Errors = {};

  /* percorro o inner que é um array de erros */
  err.inner.forEach(error => {
    validationError[error.path] =
      error.message; /* meu obj validationError crio a propriedade path do inner e jogo a message(que esta no inner também) para dentro */
  });

  return validationError;
}
