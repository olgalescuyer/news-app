'use client';
import React from 'react';

import { useAppContext } from '@/app/providers/AppWrapper';
import { MenuIcon, CloseIcon } from '@/app/icons/icons';

const MenuButton = ({ className }) => {
  const { showMenu, handleShowMenu } = useAppContext();

  return (
    <button onClick={handleShowMenu} className={className}>
      {showMenu ? (
        <>
          <CloseIcon variant="size-8" />
          <span className="sr-only">Close menu</span>
        </>
      ) : (
        <>
          <MenuIcon variant="size-8" />
          <span className="sr-only">Open menu</span>
        </>
      )}
    </button>
  );
};

export default MenuButton;
