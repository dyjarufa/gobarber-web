import React, { createContext, useCallback, useContext, useState } from 'react';

import api from '../services/api';

interface AuthState {
  token: string;
  user: object; // não preciso tipar todas as propriedades do user - o backend pode ser alterado, então uso o object para buscar o que preciso
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;
  /* o método signIn é async o seu retorno é uma Promise */
  /* credentials - estou informando que o meu método recebe as credencias da interface SignInCredentials (email e passarod)  */
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

// hack para burlar a inicialização do createContext - dessa forma consigo iniciar com um obj vazio
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

/* Todo componente que estiver dentro do AuthContext.Provider terá acesso as informaçõe do contexto */

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Gobarber:token');
    const user = localStorage.getItem('@Gobarber:user');

    if (token && user) return { token, user: JSON.parse(user) }; // converte de String para JSON

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    // console.log(response)

    const { token, user } = response.data;

    localStorage.setItem('@Gobarber:token', token);
    localStorage.setItem('@Gobarber:user', JSON.stringify(user)); // stringfy - converte JSON para String

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Gobarber:token');
    localStorage.removeItem('@Gobarber:user');

    setData({} as AuthState);
  }, []);

  return (
    /* value é obrigatório */
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

/* Criando o meu próprio hook */
function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  /** Nessa lógica informo que, caso o desenvolver use o useAuth sem o AuthProvider por volta do app um erro é disparado */
  if (!context) {
    throw new Error('useAuth must be used with an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
