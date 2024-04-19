import { formatDistanceToNow, sub, setDefaultOptions } from 'date-fns';
import { fr } from 'date-fns/locale';

export const formatDateAgo = (dateString) => {
  const publishedDate = new Date(dateString);
  setDefaultOptions({ locale: fr });

  // fix the lack of free plan (latest news from yesterday issue) :
  const yesterday = sub(new Date(), { days: 1 }); // Get yesterday's date

  // If the article was published before yesterday, adjust its date to today
  if (publishedDate < yesterday) {
    publishedDate.setDate(new Date().getDate()); // Set the date to today
  }
  const formattedDistance = formatDistanceToNow(publishedDate, {
    addSuffix: true,
    includeSeconds: true,
  });

  // Remove the "about" prefix
  const formattedDate = formattedDistance.replace(/^about\s/, '');

  return formattedDate;
};

export function getDateOneMonthAgo() {
  const today = new Date();
  const oneMonthAgo = new Date(
    today.getFullYear(),
    today.getMonth() - 1,
    today.getDate()
  );
  return oneMonthAgo.toISOString().slice(0, 10);
}

export function removeMarkdown(markdownString) {
  // Regular expression to match Markdown syntax
  const markdownRegex = /(\[.*?\])|(\*\*|__|\*|_|\~|\`)/g;
  // Replace Markdown syntax with an empty string
  return markdownString.replace(markdownRegex, '');
}

export function containsMarkdown(markdownString) {
  // Regular expression to detect Markdown syntax
  const markdownRegex = /(\[.*?\])|(\*\*|__|\*|_|\~|\`)/g;
  // Check if the string contains Markdown syntax
  return markdownRegex.test(markdownString);
}

export function formatQueryStringForUrl(queryString) {
  // Remove symbols and special characters
  const cleanedString = queryString.replace(/[^\w\s]/gi, '');

  // Replace spaces with hyphens
  const formattedString = cleanedString.replace(/\s+/g, '-');

  return formattedString;
}
