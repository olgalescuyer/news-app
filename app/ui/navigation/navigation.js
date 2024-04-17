import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { cva } from 'class-variance-authority';

const navigation = cva([''], {
  variants: {
    intent: {
      desktop: ['hidden lg:flex sm:justify-center '],
      mobile: ['lg:hidden flex flex-col'],
    },
  },
});

const Navigation = ({ data, intent, variant }) => {
  return (
    <nav className={twMerge(navigation({ intent, variant }))}>
      {data?.map((category, index) => (
        <Link
          key={index}
          href={`/${category}`}
          className={`rounded-full px-4 py-1 font-medium transition-all duration-500 hover:bg-grayscale-100 hover:text-grayscale-400 capitalize text-lg lg:text-xl ${variant} `}
        >
          {category}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
