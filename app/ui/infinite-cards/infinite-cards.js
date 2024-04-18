'use client';
import { useEffect, useState, Fragment } from 'react';
import { useInView } from 'react-intersection-observer';

import { ArticleCard, Spinner, ArticleCardsSkeleton } from '@/app/ui/ui';
import { getPopularArticles } from '@/app/lib/actions';

import { articles } from '@/app/lib/placeholder-data';

let page = 2;

const InfiniteCards = ({ keyword }) => {
  const { ref, inView } = useInView();
  // let data;
  // setTimeout(() => {
  //   data = articles;
  // }, '10000');

  // const data = articles;
  const [data, setData] = useState([]);

  useEffect(() => {
    if (inView) {
      getPopularArticles(keyword, page)
        .then((res) => {
          if (res.status === 'ok') {
            const articles = res.articles;
            setData([...data, ...articles]);
          } else {
            console.log(res.status);
          }
        })
        .catch((err) => console.log(err));
    }
    page++;
  }, [inView, data]);

  // console.log(data);

  if (data.length !== 0)
    return (
      <div className="flex flex-col ">
        {data.map((article, index) => (
          <Fragment key={index}>
            <ArticleCard article={article} />
          </Fragment>
        ))}
        <div
          className="flex justify-center items-center w-full mt-80"
          ref={ref}
        >
          <Spinner />
        </div>
      </div>
    );

  return <ArticleCardsSkeleton />;
};

export default InfiniteCards;
