'use client';
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);

import { useAppContext } from '@/app/providers/AppWrapper';
import { Navigation, Search } from '@/app/ui/ui';

const MenuMobile = () => {
  const { showMenu, handleShowMenu } = useAppContext();
  const a_search_container = useRef();
  const items = useRef();

  return (
    <div
      aria-hidden={showMenu ? false : true}
      role="navigation"
      aria-label="Main"
      ref={a_search_container}
      className={`menu-mobile w-full bg-light transition-all duration-500 origin-top ${
        showMenu ? '' : 'hidden'
      }`}
    >
      <div ref={items} className="">
        <Search className="my-2 lg:hidden" intent="static" />
        <Navigation
          intent="mobile"
          variant="text-center border border-grayscale-100 my-1 bg-grayscale-100"
        />
      </div>
    </div>
  );
};

export default MenuMobile;
