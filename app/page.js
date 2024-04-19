import { Fragment, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {
  LatestNews,
  InfiniteCards,
  ArticleCard,
  Spinner,
  ArticleCardsSkeleton,
} from '@/app/ui/ui';
// import dummy from '/public/images/dummy.webp';

export const metadata = {
  title: 'News App',
  description: 'News App',
};

export default async function Home() {
  return (
    <section className="lg:col-span-9">
      <h1 className="heading mb-6">Populaires</h1>
      <Suspense fallback={<ArticleCardsSkeleton />}>
        <InfiniteCards keyword={'paris'} />
      </Suspense>
    </section>
  );
}
