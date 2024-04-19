import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { InfiniteCards, Logo } from '@/app/ui/ui';

export async function generateMetadata({ params, searchParams }, parent) {
  // Capitalize the first letter of params.slug
  const capitalizedSlug =
    params.slug.charAt(0).toUpperCase() + params.slug.slice(1);

  return {
    title: `News App | ${capitalizedSlug}`,
  };
}

export default async function Page({ params }) {
  return (
    <section className="lg:col-span-9">
      <h2 className="heading mb-6">{params.slug}</h2>
      <InfiniteCards keyword={params.slug} sortBy={`relevancy`} />
    </section>
  );
}
