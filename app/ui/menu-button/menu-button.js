'use client';
import React from 'react';

import { useAppContext } from '@/app/providers/AppWrapper';
import { MenuIcon } from '@/app/icons/icons';

const MenuButton = () => {
  const { showMenu, handleShowMenu } = useAppContext();

  return (
    <button onClick={handleShowMenu}>
      {' '}
      <MenuIcon variant="lg:hidden size-8" />
    </button>
  );
};

export default MenuButton;
