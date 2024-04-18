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

export default async function Home() {
  return (
    <section className="lg:col-span-9">
      <h2 className="heading mb-6">Populaires</h2>
      <Suspense fallback={<ArticleCardsSkeleton />}>
        <InfiniteCards keyword={'paris'} />
      </Suspense>
    </section>
  );
}
