'use client';
import React, { useRef } from 'react';
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

const search = cva([''], {
  variants: {
    intent: {
      desktop: [
        'px-4 md:px-10 lg:px-14 overlay  absolute -bottom-16 left-0 z-50 w-full  my-3',
      ],
      mobile: [' w-full '],
    },
  },
});

const Search = ({ className, intent }) => {
  const a_search_container = useRef();
  const overlay = useRef();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const { showSearch, handleShowSearch } = useAppContext();
  // console.log(showSearch);

  const handleSearch = (value) => {
    console.log(`Searching... ${value}`);
    // const params = new URLSearchParams(searchParams);
    // params.set('page', '1');
  };

  useGSAP(
    () => {
      // ✅ safe, created during execution, selector text scoped

      if (showSearch) {
        console.log('-----------');
        gsap.to(overlay.current, {
          duration: 1,
          '--clip': '100% 0%, 0% 0%, 0% 125%, 100% 100%',
          ease: 'power4.Out',
        });
      } else {
        gsap.to(overlay.current, {
          duration: 1,
          '--clip': '0% 0%, 0% 0%, 0% 100%, 0% 100%',
          ease: 'power4.Out',
        });
      }

      // console.log('clicked');
      // console.log(context.data.length);
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
        <div className="relative flex flex-1 flex-shrink-0 transition-all duration-1000 ">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            className="peer block w-full rounded-full border border-grayscale-200 outline-primary-accent py-[9px] pl-10 text-sm outline-2 placeholder:text-grayscale-400 "
            placeholder="Find your favorite topic..."
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
          />
          <SearchIcon variant="size-6 absolute left-3 top-1/2 -translate-y-1/2 text-grayscale-200 peer-focus:text-primary-accent" />

          <Link
            href={`/search`}
            className="absolute top-0 right-0 py-2 px-10 transition-all duration-500 bg-primary-accent hover:opacity-80  text-primary-light rounded-full "
          >
            Search
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Search;
