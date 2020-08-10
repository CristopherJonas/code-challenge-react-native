import React from 'react';
import AppNavigator from './AppNavigator';
import {Context} from './Context';

const App = () => {
  return (
    <Context>
      <AppNavigator />
    </Context>
  );
};
export default App;
