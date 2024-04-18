'use server';
import { getDateOneMonthAgo } from '@/app/lib/utils';

const today = new Date().toISOString().split('T')[0];
const options = {
  method: 'GET',
  headers: {
    'X-Api-Key': process.env.API_KEY,
  },
  // next: { revalidate: 10 },
};

export async function getPopularArticles(keyword, page) {
  const oneMonthAgo = getDateOneMonthAgo();
  try {
    const response = await fetch(
      `${process.env.API_URL}/everything?q=${keyword}&searchIn=description&from${oneMonthAgo}&language=fr&sortBy=relevancy&pageSize=3&page=${page}`,
      options
    );

    const data = await response.json();

    return data;
  } catch {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch popular articles.');
  }
}
