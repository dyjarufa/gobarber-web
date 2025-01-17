import React from 'react';
import { FiXCircle, FiAlertCircle } from 'react-icons/fi';

import { ToastMessages } from '../../hooks/toast';
import { Container, Toast } from './styles';

interface ToastContaonerProps {
  messages: ToastMessages[]; // interface importada do hook Toast
}

const ToastContainer: React.FC<ToastContaonerProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map(message => (
        <Toast
          key={message.id}
          type={message.type}
          hasDescription={!!message.description}
        >
          <FiAlertCircle size={20} />

          <div>
            <strong>{message.title}</strong>
            {message.description && <p>{message.description}</p>}
          </div>

          <button type="button">
            <FiXCircle size={20} />
          </button>
        </Toast>
      ))}
    </Container>
  );
};

export default ToastContainer;
