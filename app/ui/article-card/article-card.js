import React from 'react';
import Link from 'next/link';

import { NewsImage, Spinner } from '@/app/ui/ui';
import { containsMarkdown } from '@/app/lib/utils';

const ArticleCard = ({ article, slug }) => {
  return (
    <article className="group/card-popular relative grid grid-cols-5 gap-x-8 border-b border-dotted py-6 md:py-8 lg:py-10 ">
      <div className="body col-span-3">
        <div className="meta-time ">
          Publié le&nbsp;
          {new Date(article.publishedAt).toLocaleString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
          })}
        </div>
        <h3 className="article-title">{article.title}</h3>
        {article.description && !containsMarkdown(article.description) && (
          // Render description if it exists and doesn't contain Markdown
          <p className="line-clamp-3">{article.description}</p>
        )}

        {article.source?.name && (
          <div className="opacity-70 pt-6">{article.source.name}</div>
        )}

        {/* <div>{article.author}</div> */}
      </div>

      {/* <p>{removeMarkdown(article.description)}</p> */}
      {/* <Link href={article.url}>see</Link> */}
      {/* Check for error from image URL */}
      <div className="col-span-2">
        <NewsImage imageUrl={article.urlToImage} />
        {/* {article.urlToImage && (
      <NewsImage imageUrl={article.urlToImage} />
    )} */}
      </div>

      <button className="text-primary-accent flex absolute inset-0">
        <span className="sr-only">Lire cette article dans le modal window</span>
      </button>
    </article>
  );
};

export default ArticleCard;
