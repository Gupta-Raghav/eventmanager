import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import AppRouter from './Router/AppRouter';
import UserProvider from './components/providers/UserProvider';
import configureStore from './store/configureStore';
const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <UserProvider>
        {/* {!isLoading ? () : ()} */}
        <div>
          <AppRouter />
        </div>
      </UserProvider>
    </Provider>
  );
}

export default App;
