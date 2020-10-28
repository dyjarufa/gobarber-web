import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { useField } from '@unform/core';

import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<
    IconBaseProps
  > /** ComponentType - quando eu quero receber um componente como propriedade */;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  // registerField: é o registro do input
  // defaultValue: Posso iniciar meu input com um valor( valor declarado no initialData)
  const { fieldName, error, defaultValue, registerField } = useField(name);
  const [isFocused, setFocus] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputFocus = useCallback(() => {
    setFocus(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setFocus(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  // o uso do useEffect aqui é para registrar o input(useREgister) assim que o componente for montado na tela
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current, // equivalente ao ( document.querySelector'name')
      path: 'value', // valor digitado no input
    });
  }, [fieldName, registerField]);

  return (
    <Container isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
      {error && (
        <Error title={error}>
          <FiAlertCircle size={20} color="#c53030" />
        </Error>
      )}
    </Container>
  );
};
export default Input;
