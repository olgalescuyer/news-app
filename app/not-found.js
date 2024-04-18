'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gif from '/public/images/notfound.gif';

const NotFound = () => {
  return (
    <div className="col-span-12">
      <div className="flex flex-col items-center ">
        <div className="text-9xl font-semibold">404</div>
        <h1 className="mb-4 text-xl">
          Il semble que vous avez pris la mauvaise direction.
        </h1>
        <Link
          href="/"
          className="text-primary-accent underline underline-offset-4 transition-all duration-500 hover:opacity-70 font-semibold"
        >
          Aller à la page d'accueil
        </Link>

        <div className="relative h-96  w-full max-w-xl mt-12">
          <Image
            src={gif}
            alt="error gif"
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: 'cover',
            }}
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
