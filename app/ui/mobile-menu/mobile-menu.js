'use client';
import React from 'react';
import { useAppContext } from '@/app/providers/AppWrapper';
import { Navigation } from '@/app/ui/ui';

const MobileMenu = () => {
  const { showMenu, handleShowMenu } = useAppContext();
  return (
    <div
      className={`w-full bg-light transition-all duration-500 origin-top ${
        showMenu ? 'scale-y-100 opacity-100' : ' scale-y-0 opacity-0'
      }`}
    >
      <Navigation intent="mobile" variant="text-center border my-1" />
    </div>
  );
};

export default MobileMenu;
