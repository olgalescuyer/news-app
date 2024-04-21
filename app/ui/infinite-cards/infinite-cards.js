'use client';
import { useEffect, useState, Fragment } from 'react';
import { usePathname } from 'next/navigation';
import { useInView } from 'react-intersection-observer';

import { ArticleCard, Spinner, ArticleCardSkeleton } from '@/app/ui/ui';
import { getArticles } from '@/app/lib/actions';

import { useAppContext } from '@/app/providers/AppWrapper';

let page = 2;

const InfiniteCards = ({ keyword }) => {
  const pathname = usePathname();
  const { ref, inView } = useInView();
  const { searchTrigger, handleSearchTrigger } = useAppContext();

  const [data, setData] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (inView) {
      getArticles(keyword, page)
        .then((res) => {
          // console.log(res);

          if (res.status === 'ok') {
            const articles = res.articles;
            setData([...data, ...articles]);
          } else {
            console.log(res.status);
            console.log(res.message);
          }
        })
        .catch((err) => console.log(err));
    }
    page++;
  }, [inView, data]);

  if (data.length !== 0)
    return (
      <div className="flex flex-col ">
        {data.map((article, index) => (
          <Fragment key={index}>
            <ArticleCard article={article} />
          </Fragment>
        ))}
        <div
          className="flex justify-center items-center w-full mt-10"
          ref={ref}
        >
          <Spinner />
        </div>
      </div>
    );

  return (
    <>
      <ArticleCardSkeleton />{' '}
      <div className="flex justify-center items-center w-full mt-6" ref={ref}>
        <Spinner />
      </div>
    </>
  );
};

export default InfiniteCards;
