import Link from 'next/link';
import { getNews } from '@/app/lib/data';
import { formatDateAgo } from '@/app/lib/utils';

const LatestNews = async () => {
  const news = await getNews();
  // console.log(typeof news);
  // console.log(news.totalResults);

  return (
    <section className="latest-news col-span-12 lg:col-span-3 lg:col-start-10 ">
      <h2 className="heading mb-6">Actualité</h2>
      <div className="latest-news-cards">
        {news.articles.slice(0, 6).map((item, index) => (
          <div
            key={index}
            className=" card-latest-news py-10 border-b border-dotted  "
          >
            <div className="flex items-center space-x-1">
              <div className="size-2 rounded-full bg-primary-accent"></div>
              <span className="meta-time">
                {formatDateAgo(item.publishedAt)}
              </span>
            </div>

            <Link href={item.url}>
              {' '}
              <h3 className="text-xl font-semibold transition-all duration-500 hover:opacity-60 mb-2">
                {item.title}
              </h3>
            </Link>

            {item.author && (
              <span className=" opacity-70 pt-2">Lire sur "{item.author}"</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestNews;
