'use client';
import { useRef } from 'react';
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

  useGSAP(() => {
    animateText(a_text.current);
    animateBackDrops(
      a_backdrop_1.current,
      a_backdrop_2.current,
      a_container.current
    );
  });

  return (
    <div
      ref={a_container}
      className="loader fixed top-0 left-0 z-50 w-full h-full flex justify-around items-center bg-primary-dark"
    >
      <div ref={a_content} className="flex items-end space-x-3 relative  ">
        <div
          ref={a_text}
          className="absolute bottom-0 left-0 text-primary-light capitalize text-xl leading-none -translate-x-full"
        >
          Infos en France
        </div>
        <div className="hor-divider absolute bottom-0 -left-1.5 h-1/3 w-px bg-primary-light animate-cursor"></div>
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
