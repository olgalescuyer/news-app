'use client';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { SearchIcon, CloseIcon } from '@/app/icons/icons';

import { useAppContext } from '@/app/providers/AppWrapper';

const SearchButton = ({ className }) => {
  const { showSearch, handleShowSearch } = useAppContext();

  return (
    <button onClick={handleShowSearch} className={twMerge('', className)}>
      {showSearch ? (
        <>
          <CloseIcon variant="size-6" />
          <span className="sr-only">Close search bar</span>
        </>
      ) : (
        <>
          <SearchIcon variant="size-6" />
          <span className="sr-only">Open search bar</span>
        </>
      )}
    </button>
  );
};

export default SearchButton;
