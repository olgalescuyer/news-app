import React from 'react';
import Link from 'next/link';

import { ArticleImage } from '@/app/ui/ui';
import { containsMarkdown } from '@/app/lib/utils';

const ArticleCard = ({ article }) => {
  return (
    <article className="group/card-popular relative lg:grid grid-cols-5 gap-x-8 border-b border-dotted py-6 md:py-8 lg:py-10 ">
      <div className="body col-span-3">
        <div className="meta-time ">
          Publié le&nbsp;
          {new Date(article.publishedAt).toLocaleString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
          })}
        </div>
        <h2 className="article-title">{article.title}</h2>
        {article.description && !containsMarkdown(article.description) && (
          // Render description if it exists and doesn't contain Markdown
          <p className="line-clamp-3">{article.description}</p>
        )}

        {article.source.name && (
          <div className="opacity-70 my-6">{article.source.name}</div>
        )}

        {/* <div>{article.author}</div> */}
      </div>

      {/* <Link href={article.url}>Lire sur {article.source.name}</Link> */}
      {/* Check for error from image URL */}
      <div className="col-span-2">
        <ArticleImage imageUrl={article.urlToImage} alt={article.source.name} />
      </div>

      <Link
        href={`/news/${encodeURIComponent(article.title)}`}
        className=" absolute inset-0"
      >
        <span className="sr-only">Lire cette article </span>
      </Link>
    </article>
  );
};

export default ArticleCard;
