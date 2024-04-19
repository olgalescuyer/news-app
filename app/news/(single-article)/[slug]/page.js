import React from 'react';

import { getArticles } from '@/app/lib/actions';

const SingleArticlePage = async (params) => {
  const response = await getArticles(params.slug, 1);

  //   console.log(response);
  return (
    <div className="col-span-8">
      <h1 className="heading mb-16">Single Article Page</h1>
      <p className="text-lg font-semibold mb-2">Why is the page so nice?</p>
      <p className="max-w-xl">
        {' '}
        {`When navigating without an article ID, the query parameter 'q=' with URL-encoded title (I consider as unique, lack of missing ID) elegantly echoes the silence of a blank canvas, awaiting the brushstrokes of search terms to animate its vast expanse. `}
      </p>
      <div className="text-states-200 text-sm mt-4 mb-12">
        {' '}
        <div>{`response status: ${response.status}`}</div>
        <div>{`response totalResults: ${response.totalResults}`}</div>
        <div>{`response articles: [${response.articles}]`}</div>
      </div>
    </div>
  );
};

export default SingleArticlePage;
