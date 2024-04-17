import { getDateOneMonthAgo } from '@/app/lib/utils';

const today = new Date().toISOString().split('T')[0];
const options = {
  method: 'GET',
  headers: {
    'X-Api-Key': process.env.API_KEY,
  },
};

export async function getNews() {
  // `force-cache` is the default and that's why it is omitted:
  try {
    const data = await fetch(
      `${process.env.API_URL}/top-headlines?country=fr&category=business`,
      options
    );

    return data.json();
  } catch {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

export async function getSources() {
  // `force-cache` is the default and that's why it is omitted:
  try {
    const data = await fetch(
      `${process.env.API_URL}/top-headlines/sources`,
      options
    );

    return data.json();
  } catch {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

export async function getPopularArticles() {
  const oneMonthAgo = getDateOneMonthAgo();
  // `force-cache` is the default and that's why it is omitted:
  try {
    const data = await fetch(
      `${process.env.API_URL}/everything?q=olympics&from${oneMonthAgo}&language=fr&sortBy=popularity`,
      options
    );

    return data.json();
  } catch {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}
