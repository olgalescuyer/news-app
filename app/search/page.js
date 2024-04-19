import { Fragment, Suspense } from 'react';
import { Search, InfiniteCards, ArticleCardSkeleton } from '@/app/ui/ui';

export const metadata = {
  title: 'News App | Search',
  description: 'News App',
};

const SearchPage = ({ searchParams }) => {
  // console.log(encodeURIComponent(searchParams.query));
  return (
    <section className="lg:col-span-9">
      <h1 className="heading mb-6">Recherche avancée</h1>
      <Search className="my-10 max-w-2xl" intent="static" />

      <Suspense fallback={<ArticleCardSkeleton />}>
        <InfiniteCards
          keyword={`${encodeURIComponent(searchParams.query)}`}
          sortBy="popularity"
        />
      </Suspense>
    </section>
  );
};

export default SearchPage;
