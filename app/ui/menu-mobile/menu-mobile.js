'use client';
import React from 'react';
import { useAppContext } from '@/app/providers/AppWrapper';
import { Navigation, Search } from '@/app/ui/ui';

const MenuMobile = () => {
  const { showMenu, handleShowMenu } = useAppContext();
  return (
    <div
      className={`menu-mobile w-full bg-primary-accent transition-all duration-500 origin-top ${
        showMenu ? '' : '  '
      }`}
    >
      <Search className=" lg:hidden" />
      <Navigation
        intent="mobile"
        variant="text-center border border-grayscale-100 my-1 bg-grayscale-100"
      />
    </div>
  );
};

export default MenuMobile;
