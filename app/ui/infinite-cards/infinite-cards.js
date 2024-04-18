'use client';
import { useEffect, useState, Fragment } from 'react';
import { useInView } from 'react-intersection-observer';

import { ArticleCard, Spinner } from '@/app/ui/ui';
import { getPopularArticles } from '@/app/lib/actions';

import { articles } from '@/app/lib/placeholder-data';

let page = 2;

const InfiniteCards = ({ keyword }) => {
  const { ref, inView } = useInView();

  const data = articles;

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   if (inView) {
  //     getPopularArticles(keyword, page).then((res) => {
  //       console.log(res);
  //       const articles = res.articles;
  //       setData([...data, ...articles]);
  //     });
  //   }
  //   setData([...data, ...articles]);
  // }, [inView, data]);

  return (
    <div className="flex flex-col ">
      {data.map((article, index) => (
        <Fragment key={index}>
          <ArticleCard article={article} />
        </Fragment>
      ))}
      {/* <div className="flex justify-center items-center w-full" ref={ref}>
        <Spinner />
      </div> */}
    </div>
  );
};

export default InfiniteCards;
