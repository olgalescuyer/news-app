'use client';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { SearchIcon, CloseIcon } from '@/app/icons/icons';

import { useAppContext } from '@/app/providers/AppWrapper';

const SearchButton = ({ className, label }) => {
  const { showSearch, handleShowSearch } = useAppContext();

  return (
    <button onClick={handleShowSearch} className={twMerge('', className)}>
      {label ? <span>{label}</span> : false}
      {showSearch ? (
        <CloseIcon variant="size-6" />
      ) : (
        <SearchIcon variant="size-6" />
      )}
    </button>
  );
};

export default SearchButton;
