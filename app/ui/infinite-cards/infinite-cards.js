'use client';
import { useEffect, useState, Fragment } from 'react';
import { usePathname } from 'next/navigation';
import { useInView } from 'react-intersection-observer';

import { ArticleCard, Spinner, ArticleCardsSkeleton } from '@/app/ui/ui';
import { getArticles } from '@/app/lib/actions';

import { useAppContext } from '@/app/providers/AppWrapper';

let page = 2;

const InfiniteCards = ({ keyword, sortBy }) => {
  const pathname = usePathname();
  const { ref, inView } = useInView();
  const { searchTrigger, handleSearchTrigger } = useAppContext();
  console.log(searchTrigger);

  const [data, setData] = useState([]);
  const [message, setMessage] = useState(
    "Il semble qu'aucun article ne corresponde à ces mots."
  );

  useEffect(() => {
    if (inView) {
      getArticles(keyword, sortBy, page)
        .then((res) => {
          // console.log(res);

          if (res.status === 'ok') {
            const articles = res.articles;
            setData([...data, ...articles]);
          } else if (res.totalResults === 0) {
            setMessage("Il semble qu'aucun article ne corresponde à ces mots.");
          } else {
            console.log(res.status);
            console.log(res.message);
          }
        })
        .catch((err) => console.log(err));
    }
    page++;

    return () => {
      setMessage('');
    };
  }, [inView, data, searchTrigger]);

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
    <div>
      {pathname === '/search' ? <span>{message}</span> : false}

      <>
        {' '}
        <ArticleCardsSkeleton />{' '}
        <div className="flex justify-center items-center w-full mt-6" ref={ref}>
          <Spinner />
        </div>
      </>
    </div>
  );
};

export default InfiniteCards;
