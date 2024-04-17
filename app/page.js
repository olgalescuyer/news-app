import Image from 'next/image';
import Link from 'next/link';
// import { getSources } from '@/app/lib/data';

import { LatestNews } from '@/app/ui/ui';

export default async function Home() {
  return (
    <div className="min-h-screen  mt-40 lg:grid grid-cols-12">
      <LatestNews />
    </div>
  );
}
