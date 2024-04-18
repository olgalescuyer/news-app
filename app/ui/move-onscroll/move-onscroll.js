'use client';
import React, { useState, useEffect } from 'react';

import useScroll from '@/app/hooks/useScroll';

const MoveOnScroll = ({ children }) => {
  // scrollig effect :
  const [classList, setClassList] = useState([]);
  const scroll = useScroll();

  // ---update classList of form on scroll
  useEffect(() => {
    const newClassList = [];

    if (scroll.y > 50 && scroll.y - scroll.lastY > 0)
      newClassList.push('-translate-y-full');

    setClassList(newClassList);
  }, [scroll.y, scroll.lastY]);

  return (
    <div
      className={`fixed top-0 left-0 z-30 w-full bg-light flex flex-col transition-all duration-500 animate-in_out ${classList}`}
    >
      {children}
    </div>
  );
};

export default MoveOnScroll;
