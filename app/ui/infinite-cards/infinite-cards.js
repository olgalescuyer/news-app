'use client';
import { useEffect, useState, Fragment } from 'react';
import { useInView } from 'react-intersection-observer';

import { ArticleCard, Logo, Spinner } from '@/app/ui/ui';
import { getPopularArticles } from '@/app/lib/actions';

let page = 2;

const InfiniteCards = () => {
  const { ref, inView } = useInView();

  const [data, setData] = useState([]);

  useEffect(() => {
    if (inView) {
      getPopularArticles(page).then((res) => {
        // console.log(res.articles);
        const articles = res.articles;

        setData([...data, ...articles]);
      });
    }
    page++;
  }, [inView, data]);

  // console.log(page);
  return (
    <div className="flex flex-col ">
      {data.map((article, index) => (
        <Fragment key={index}>
          <ArticleCard article={article} />
        </Fragment>
      ))}
      <div className="flex justify-center items-center w-full" ref={ref}>
        <Spinner />
      </div>
    </div>
  );
};

export default InfiniteCards;
