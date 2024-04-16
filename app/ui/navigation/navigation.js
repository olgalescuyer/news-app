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
      {[
        ['Business', '/business'],
        ['Culture', '/culture'],
        ['Politics', '/politic'],
        ['Sports', '/sports'],
        ['Health', '/sports'],
        ['Style', '/sports'],
        ['Travel', '/sports'],
        ['Entertainment', '/sports'],
      ].map(([title, url], index) => (
        <Link
          key={index}
          href={url}
          className={`rounded-full px-4 py-1 font-medium transition-all duration-500 hover:bg-grayscale-100 hover:text-grayscale-400 ${variant} `}
        >
          {title}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
