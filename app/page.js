import Image from 'next/image';
import Link from 'next/link';
import { getPopularArticles } from '@/app/lib/data';
import { containsMarkdown } from '@/app/lib/utils';

import { LatestNews, NewsImage } from '@/app/ui/ui';
// import dummy from '/public/images/dummy.webp';

export default async function Home() {
  const response = await getPopularArticles();
  // console.log(articles.totalResults);
  // console.log(articles.articles);

  const articles = response.articles;

  return (
    <div className="min-h-screen  mt-40 lg:grid lg:grid-cols-12 gap-6">
      <div className="lg:col-span-8">
        <h2 className="heading mb-6">Most Popular</h2>

        <div className="flex flex-col space-y-6">
          {articles.map((article, index) => (
            <article
              className="card-popular  grid grid-cols-3 gap-8"
              key={index}
            >
              <div className="body col-span-2">
                <div className="meta-time ">
                  Published at&nbsp;
                  {new Date(article.publishedAt).toLocaleString('en-US', {
                    month: 'short',
                    day: '2-digit',
                    year: 'numeric',
                  })}
                </div>
                <h3 className="article-title">{article.title}</h3>
                {article.description &&
                  !containsMarkdown(article.description) && (
                    // Render description if it exists and doesn't contain Markdown
                    <p>{article.description}</p>
                  )}

                <span className="opacity-70">{article.source.name}</span>

                {/* <div>{article.author}</div> */}
              </div>

              {/* <p>{removeMarkdown(article.description)}</p> */}
              {/* <Link href={article.url}>see</Link> */}
              {/* Check for error from image URL */}
              <div className="col-span-1">
                {article.urlToImage && (
                  <NewsImage imageUrl={article.urlToImage} />
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
      <LatestNews />
    </div>
  );
}
