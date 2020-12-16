/* a lógica dessa arquivo é centralizar todos os providers caso cresça de forma considerável
 assim, o código fica mais organizado */

import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
  );
};

export default AppProvider;
