import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { InfiniteCards } from '@/app/ui/ui';

export default async function Page({ params }) {
  return (
    <section className="lg:col-span-9">
      <h2 className="heading mb-6">{params.slug}</h2>
      <InfiniteCards keyword={params.slug} />
    </section>
  );
}
