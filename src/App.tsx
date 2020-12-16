import React from 'react';

// import SignUp from './pages/SignUp';
import AppProvider from './hooks';
import SignIn from './pages/SignIn';
import GlobalStyled from './styles/global';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>

    <GlobalStyled />
  </>
);

export default App;
