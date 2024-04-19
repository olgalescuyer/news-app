'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import server_err from '/public/images/server.gif';

const Error = ({ error, reset }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <div className="col-span-12 pb-56">
      <div className="flex flex-col justify-arround mb-32">
        <div className="font-bold  uppercase ">
          <div className="text-center">Whoops!</div>
          <div className="my-4 text-states-200 text-center">
            500 ERROR: INTERNAL SERVER HICCUP
          </div>
          <div className="font-bold text-3xl md:text-5xl lg:text-7xl xl:text-9xl text-center">
            Gremlins in <br />
            the Machine!
          </div>
        </div>
        <h1 className="mt-10 text-center text-sm md:text-base lg:text-lg">
          Oh no, it seems my servers are throwing a digital tantrum! <br />
          My apologies for the inconvenience.
        </h1>
        <div className="flex justify-around my-6">
          <button
            className="bg-primary-accent font-semibold text-primary-light py-2 px-6 rounded-2xl transition-all duration-500 hover:opacity-70 "
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
            Try again{' '}
          </button>
        </div>
      </div>

      <div className="xl:grid xl:grid-cols-12 xl:gap-4">
        <div className=" xl:col-span-6 bg-light border-card p-4 md:p-8 text-primary-dark max-w-2xl">
          <p className="text-container mb-4">
            While I work tirelessly to banish these pesky gremlins back into
            cyberspace, here are a few things you can do:
          </p>

          <ol className="list-decimal list-inside flex flex-col space-y-2 mb-4">
            <li>
              <b> Take a Breather:</b>&nbsp; Relax, grab a cup of your favorite
              digital brew, and give me a moment to work my magic.
            </li>
            <li>
              <b>Try Again Later:</b>&nbsp; Sometimes a little patience is all
              it takes. Give it another shot in a few minutes, and hopefully,
              all will be back to normal.
            </li>
            <li>
              <b> Send Out a Digital S.O.S:</b>&nbsp; If the problem persists,
              don&apos;t hesitate to reach me out. I&apos;m here to help
              troubleshoot any glitches and guide you back to smooth sailing.
            </li>
          </ol>

          <p className="mb-4">
            Remember, even in the vast expanse of the digital universe, glitches
            happen. But fear not! With a sprinkle of patience and a dash of
            perseverance, we&apos;ll have things back up and running in no time.
          </p>

          <p>
            Keep calm and code on,
            <br />
            Your Digital Unicorn
          </p>
        </div>

        <div className="xl:col-span-6 my-10 xl:my-0 relative h-96 xl:h-full max-w-2xl lg:w-full rounded-2xl overflow-hidden">
          <Image
            src={server_err}
            alt="error gif"
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Error;
