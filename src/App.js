import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import AppRouter from './Router/AppRouter';
import UserProvider from './components/providers/UserProvider';
function App() {
  return (
    <UserProvider>
      {/* {!isLoading ? () : ()} */}
      <div>
        <AppRouter />
      </div>
    </UserProvider>
  );
}
const mapStateToProps = (state) => ({
  events: state.events,
  filters: state.filters,
});
export default connect(mapStateToProps)(App);
// export default App;
