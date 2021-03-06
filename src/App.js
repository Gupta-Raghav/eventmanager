import React from 'react';
import AppRouter from './Router/AppRouter';
import UserProvider from './components/providers/UserProvider';
function App() {
  return (
    <UserProvider>
      <div>
        <AppRouter />
      </div>
    </UserProvider>
  );
}

export default App;
