// Loading animation
const shimmer =
  'relative before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] animate-pulse before:bg-gradient-to-r before:from-transparent before:via-grayscale-200 before:to-transparent overflow-hidden rounded-xl bg-grayscale-100';

export function ArticleCardSkeleton() {
  return (
    <div
      className={` skeleton  overflow-hidden  lg:grid grid-cols-5 gap-x-8 border-b border-dotted py-6 md:py-8 lg:py-10`}
    >
      <div className="body col-span-3 max-w-2xl">
        <div className={`${shimmer} py-2 w-20 mb-3`}></div>
        <div className={`${shimmer} py-4 w-full odd:w-[80%] mb-2 `}></div>
        {[1, 2].map((item, index) => (
          <div
            key={index}
            className={`${shimmer} py-3 w-[90%] mb-2 mt-4 odd:w-[80%]`}
          ></div>
        ))}
      </div>

      <div className={`${shimmer} image h-72 w-full col-span-2 `}></div>
    </div>
  );
}

export function ArticleCardsSkeleton() {
  return (
    <>
      <ArticleCardSkeleton />
      <ArticleCardSkeleton />
      <ArticleCardSkeleton />
    </>
  );
}

export function LatestNewsCardSkeleton() {
  return (
    <div
      className={` skeleton  overflow-hidden   border-b border-dotted py-6 md:py-8 lg:py-10`}
    >
      <div className="body max-w-2xl">
        <div className={`${shimmer} py-2 w-20 mb-3`}></div>
        <div className={`${shimmer} py-4 w-full odd:w-[80%] mb-2 `}></div>
        {[1, 2].map((item, index) => (
          <div
            key={index}
            className={`${shimmer} py-3 w-[90%] mb-2 mt-4 odd:w-[80%]`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export function LatestNewsCardsSkeleton() {
  return (
    <div className="flex flex-col col-span-12 lg:col-span-3 lg:col-start-10">
      <div className={`${shimmer} py-5 w-[60%] mb-6`}></div>

      <LatestNewsCardSkeleton />
      <LatestNewsCardSkeleton />
      <LatestNewsCardSkeleton />
      <LatestNewsCardSkeleton />
    </div>
  );
}
