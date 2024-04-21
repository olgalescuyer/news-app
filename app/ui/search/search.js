'use client';
import React, { useRef } from 'react';
import Link from 'next/link';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);

import { SearchButton } from '@/app/ui/ui';
import { SearchIcon } from '@/app/icons/icons';

import { useAppContext } from '@/app/providers/AppWrapper';
import { animateOverlay } from './animation';
import { search } from './style';

const Search = ({ className, intent }) => {
  const a_search_container = useRef();
  const overlay = useRef();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace, push } = useRouter();

  const { showSearch, handleShowSearch } = useAppContext();

  const handleSearch = (term) => {
    // console.log(`Searching... ${term}`);

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
      // safe, created during execution, selector .overlay scoped
      animateOverlay(showSearch, overlay);
    },
    {
      dependencies: [showSearch],
      scope: a_search_container,
    }
  );

  // Function to handle key press
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent the default form submission
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      ref={a_search_container}
      className={twMerge('search-bar', className)}
    >
      <div ref={overlay} className={twMerge(search({ intent }))}>
        <form
          onKeyDown={handleKeyDown}
          className="relative flex flex-1 flex-shrink-0 transition-all duration-1000 "
        >
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
          {pathname !== '/search' ? (
            <Link
              href={`/search?${searchParams}`}
              onClick={() => {
                if (pathname !== '/search') {
                  handleShowSearch();
                }
              }}
              className="btn-primary"
            >
              <SearchIcon variant="size-6 md:hidden text-primary-light" />
              <span className="sr-only md:not-sr-only font-semibold text-primary-light">
                Rechercher
              </span>
            </Link>
          ) : (
            <button className="btn-primary">
              <SearchIcon variant="size-6 md:hidden text-primary-light" />
              <span className="sr-only md:not-sr-only font-semibold text-primary-light">
                Rechercher
              </span>
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Search;
