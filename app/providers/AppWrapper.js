'use client';
import { createContext, useContext, useState, useEffect } from 'react';

// initial states:
const AppContext = createContext({
  showMenu: false,
  handleShowMenu: () => {},
  showSearch: false,
  handleShowSearch: () => {},
  searchTrigger: false,
  handleSearchTrigger: () => {},
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

  // searchbar toggle:
  const [searchTrigger, setSearchTrigger] = useState(false);
  const handleSearchTrigger = () => {
    // console.log('triggered', searchTrigger);
    setSearchTrigger(!searchTrigger);
  };

  // states finally :
  let sharedState = {
    showMenu,
    handleShowMenu,
    showSearch,
    handleShowSearch,
    searchTrigger,
    handleSearchTrigger,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
