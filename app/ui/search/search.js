'use client';
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { cva } from 'class-variance-authority';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);

import { SearchButton } from '@/app/ui/ui';
import { SearchIcon } from '@/app/icons/icons';

import { useAppContext } from '@/app/providers/AppWrapper';
import { animateOverlay } from './animation';

const search = cva([''], {
  variants: {
    intent: {
      animated: [
        'px-4 md:px-10 lg:px-14 overlay  absolute -bottom-16 left-0 z-50 w-full  my-3',
      ],
      static: [' w-full '],
    },
  },
});

const Search = ({ className, intent }) => {
  const a_search_container = useRef();
  const overlay = useRef();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace, push } = useRouter();
  // console.log(pathname);

  const { showSearch, handleShowSearch, handleSearchTrigger } = useAppContext();

  const handleSearch = (term) => {
    console.log(`Searching... ${term}`);

    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  };

  // animated search bar in desktop intent (overlay by clipPath css)
  useGSAP(
    () => {
      // safe, created during execution, selector text scoped
      animateOverlay(showSearch, overlay);
    },
    {
      dependencies: [showSearch],
      scope: a_search_container,
    }
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      ref={a_search_container}
      className={twMerge('search-bar', className)}
    >
      <div ref={overlay} className={twMerge(search({ intent }))}>
        <form className="relative flex flex-1 flex-shrink-0 transition-all duration-1000 ">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            type="text"
            defaultValue={searchParams.get('query')?.toString()}
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
            className="peer block w-full rounded-full border border-grayscale-200 outline-primary-accent py-[9px] pl-6 md:pl-10 text-sm outline-2 placeholder:text-grayscale-400 "
            placeholder="Find your favorite topic..."
          />
          <SearchIcon variant="size-6 hidden md:block absolute left-3 top-1/2 -translate-y-1/2 text-grayscale-200 peer-focus:text-primary-accent" />

          <Link
            href={`/search?${searchParams}`}
            onClick={() => {
              if (pathname !== '/search') {
                handleShowSearch();
              }
              handleSearchTrigger();
            }}
            className="absolute top-0 right-0 py-2 px-2 md:px-10 transition-all duration-500 bg-primary-accent hover:opacity-80   rounded-full "
          >
            <SearchIcon variant="size-6 md:hidden text-primary-light" />
            <span className="sr-only md:not-sr-only font-semibold text-primary-light">
              Rechercher
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Search;
