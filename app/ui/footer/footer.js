'use client';
import React, { useState, useEffect } from 'react';

import useScroll from '@/app/hooks/useScroll';
import Link from 'next/link';
import { Logo } from '@/app/ui/ui';

const Footer = () => {
  // scrollig effect :
  const [classList, setClassList] = useState([]);
  const scroll = useScroll();

  // ---update classList of form on scroll
  useEffect(() => {
    const newClassList = [];

    if (scroll.y > 50 && scroll.y - scroll.lastY > 0)
      newClassList.push('translate-y-full');

    setClassList(newClassList);
  }, [scroll.y, scroll.lastY]);

  return (
    <footer
      className={`fixed bottom-0 left-0 z-30 w-full bg-dark py-2 transition-all duration-500 animate-in_out ${classList}`}
    >
      <div className="main-container w-full flex items-center justify-between">
        <Link href="/" className="w-12 lg:w-20 ">
          <span className="sr-only text-primary-light">
            Aller à la page d'accueil
          </span>
          <Logo variant="fill-primary-light" />
        </Link>

        <span className="text-sm text-primary-light"> ©2024</span>
      </div>
    </footer>
  );
};

export default Footer;
