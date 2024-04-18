'use client';
import React from 'react';

const NewsImage = ({ imageUrl }) => {
  return (
    <div className="h-72 overflow-hidden">
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
      />
    </div>
  );
};

export default NewsImage;
