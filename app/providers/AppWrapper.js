'use client';
import { createContext, useContext, useState, useEffect } from 'react';

// initial states:
const AppContext = createContext({
  showMenu: false,
  handleShowMenu: () => {},
  showSearch: false,
  handleShowSearch: () => {},
});

export function AppWrapper({ children }) {
  // menu toggle:
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    // console.log('clicked');
    setShowMenu(!showMenu);
  };

  // searchbar toggle:
  const [showSearch, setShowSearch] = useState(false);
  const handleShowSearch = () => {
    // console.log('clicked');
    setShowSearch(!showSearch);
  };

  // states finally :
  let sharedState = {
    showMenu,
    handleShowMenu,
    showSearch,
    handleShowSearch,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
