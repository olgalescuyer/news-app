import { getDateOneMonthAgo } from '@/app/lib/utils';

const today = new Date().toISOString().split('T')[0];
const options = {
  method: 'GET',
  headers: {
    'X-Api-Key': process.env.API_KEY,
  },
  // next: { revalidate: 10 },
};

export async function getNews() {
  try {
    const data = await fetch(
      `${process.env.API_URL}/top-headlines?country=fr&category=business`,
      options
    );

    return data.json();
  } catch {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch clatest news.');
  }
}

export async function getSources() {
  try {
    const data = await fetch(
      `${process.env.API_URL}/top-headlines/sources`,
      options
    );

    return data.json();
  } catch {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch sources.');
  }
}
