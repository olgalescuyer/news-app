import { Suspense } from 'react';

import { InfiniteCards, ArticleCardsSkeleton } from '@/app/ui/ui';

export const metadata = {
  title: 'News App',
  description: 'News App',
};

export default async function Home() {
  return (
    <section className="lg:col-span-9">
      <h1 className="heading mb-6">Populaires</h1>
      <Suspense fallback={<ArticleCardsSkeleton />}>
        <InfiniteCards keyword={`paris`} sortBy={`relevancy`} />
      </Suspense>
    </section>
  );
}
