import { formatDistanceToNow, sub } from 'date-fns';

export const formatDateAgo = (dateString) => {
  const publishedDate = new Date(dateString);

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
