import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { LatestNews, InfiniteCards, ArticleCard, Spinner } from '@/app/ui/ui';
// import dummy from '/public/images/dummy.webp';

export default async function Home() {
  return (
    <section className="lg:col-span-9">
      <h2 className="heading mb-6">Populaires</h2>
      <InfiniteCards keyword={'paris'} />
    </section>
  );
}
