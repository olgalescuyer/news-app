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

const Navigation = ({ intent, variant }) => {
  return (
    <nav className={twMerge(navigation({ intent, variant }))}>
      {[
        ['économie', 'economie'],
        ['business', 'business'],
        ['culture', 'culture'],
        ['science', 'science'],
        ['sport', 'sport'],
        ['technologies', 'technologies'],
      ].map(([title, url], index) => (
        <Link
          key={index}
          href={`/${url}`}
          className={`rounded-full px-4 py-1 font-medium transition-all duration-500 hover:bg-grayscale-100 hover:text-grayscale-400 capitalize text-lg lg:text-xl ${variant} `}
        >
          {title}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
