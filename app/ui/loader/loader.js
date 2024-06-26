'use client';
import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP, TextPlugin);
// gsap.registerPlugin(TextPlugin);

import { Logo } from '@/app/ui/ui';
import { animateText, animateBackDrops } from './animations';

const Loader = () => {
  const a_container = useRef();
  const a_text = useRef();
  const a_backdrop_1 = useRef();
  const a_backdrop_2 = useRef();
  const a_content = useRef();
  const tl = gsap.timeline({ defaults: { duration: 1 } });

  // setup for state-reactive animation
  const [mounted, setMonted] = useState(false);
  useEffect(() => {
    setMonted(true);
  }, []);

  useGSAP(() => {
    animateText(a_text.current);
    animateBackDrops(
      a_backdrop_1.current,
      a_backdrop_2.current,
      a_container.current
    );
  }, [mounted]);

  return (
    <div
      ref={a_container}
      className="loader fixed top-0 left-0 z-50 w-full h-full flex justify-around items-center bg-primary-dark"
    >
      <div
        ref={a_content}
        className="sm:flex sm:items-end sm:space-x-3 relative "
      >
        <div
          ref={a_text}
          className="absolute sm:bottom-0 sm:left-0 text-primary-light capitalize text-xl leading-none -translate-y-full sm:-translate-y-0 sm:-translate-x-full pb-2 sm:pb-0"
        >
          Infos en France
        </div>
        <div className="sm:hidden cursor absolute -top-7 -left-2 "></div>
        <div className="hidden sm:block cursor absolute bottom-0 -left-1.5"></div>
        <div className="w-40">
          <Logo variant="fill-primary-light" />
        </div>
      </div>
      <div
        ref={a_backdrop_1}
        className="fixed inset-0 bg-primary-accent circle-overlay"
      ></div>
      <div
        ref={a_backdrop_2}
        className="fixed inset-0 backdrop-blur-sm bg-primary-light circle-overlay"
      ></div>
    </div>
  );
};

export default Loader;
