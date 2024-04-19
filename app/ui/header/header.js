import Link from 'next/link';
import Logo from '@/app/ui/logo/logo';
import {
  Navigation,
  MenuButton,
  MenuMobile,
  Filters,
  Search,
  SearchButton,
} from '@/app/ui/ui';
import { SearchIcon } from '@/app/icons/icons';

const Header = async () => {
  return (
    <div className="main-container w-full relative ">
      <header className="z-40 pt-2 md:pt-4 lg:pt-6 ">
        <div className="flex justify-between  items-end mb-2 ">
          <div className="flex items-end">
            <Link href="/" className="w-20 lg:w-36 pb-2 mr-1">
              <span className="sr-only">Aller à la page d'accueil</span>
              <Logo variant="fill-primary-dark" />
            </Link>

            <Navigation intent="desktop" />
          </div>

          <MenuButton className=" lg:hidden" />
          <SearchButton className="hidden lg:block" />
        </div>

        <div className="divider h-px w-full bg-grayscale-300"></div>
      </header>{' '}
      <Search intent="desktop" className="hidden lg:block" />
      <MenuMobile />
    </div>
  );
};

export default Header;
