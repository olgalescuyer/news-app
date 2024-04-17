import { getNews } from '@/app/lib/data';
import { formatDateAgo } from '@/app/lib/utils';

const LatestNews = async () => {
  const news = await getNews();
  // console.log(typeof news);
  // console.log(news.totalResults);
  // console.log(news.articles);
  return (
    <div className="latest-news col-span-12 lg:col-span-4 lg:col-start-9">
      <h2 className="font-bold text-3xl uppercase mb-6">Latest News</h2>
      <div className="cards">
        {news.articles.map((item, index) => (
          <div key={index} className="card  py-10 border-b border-dotted">
            <div className="text-xs md:text-sm opacity-80">
              {/* {new Date(item.publishedAt).toISOString().split('T')[0]}&nbsp; */}
              {formatDateAgo(item.publishedAt)}
            </div>

            <h2 className="text-2xl font-semibold">{item.title}</h2>
            {/* <span className="chips inline bg-grayscale-200">
            {item.author}
          </span> */}

            {/* <Link href={item.url} className="text-grayscale-300">
            Read
          </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
