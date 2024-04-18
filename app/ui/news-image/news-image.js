'use client';

import React from 'react';
import Image from 'next/image';

import dummy from '/public/images/dummy.webp';

const NewsImage = ({ imageUrl }) => {
  return (
    <div className="h-72 overflow-hidden transition-all duration-500  group-hover/card-popular:rounded-xl">
      {imageUrl === null ? (
        <Image
          src={dummy}
          alt="Dummy image"
          className="transition-all duration-500 group-hover/card-popular:scale-105"
        />
      ) : (
        <img
          src={imageUrl}
          alt="Image from source"
          onError={(e) => {
            e.target.onerror = null; // Prevent infinite loop
            e.target.style.display = 'none'; // Hide the image if it fails to load
          }}
          style={{
            objectFit: 'cover',
            height: '100%',
            width: '100%',
          }}
          className="transiotion-all duration-500 group-hover/card-popular:scale-105"
        />
      )}
    </div>
  );
};

export default NewsImage;
