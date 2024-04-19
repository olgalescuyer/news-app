'use client';
import React, { useState, useEffect } from 'react';

const useScroll = () => {
  const [scroll, setScroll] = useState({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
  });

  // set up event listeners
  const handleScroll = () => {
    setScroll((last) => {
      return {
        x: window.scrollX,
        y: window.scrollY,
        lastX: last.x,
        lastY: last.y,
      };
    });
  };

  useEffect(() => {
    // call our fn :
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    // cleanup fn :
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scroll;
};

export default useScroll;
