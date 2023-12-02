import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import Router from './router';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}

export default App;
