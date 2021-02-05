import React, { useContext, createContext, useState } from 'react';

import NavigationApp from './src/navgations';
import Context from './src/screen/Context';

export default function App() {
  const [context, setContext] = useState([])

  return (
    <Context.Provider value={[context, setContext]}>
      <NavigationApp></NavigationApp>
    </Context.Provider>
  );
}