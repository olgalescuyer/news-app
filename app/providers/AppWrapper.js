'use client';
import { createContext, useContext, useState, useEffect } from 'react';

// initial states:
const AppContext = createContext({
  showMenu: false,
  handleShowMenu: () => {},
});

export function AppWrapper({ children }) {
  // menu toggle:
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    // console.log('clicked');
    setShowMenu(!showMenu);
  };

  // states finally :
  let sharedState = {
    showMenu,
    handleShowMenu,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
