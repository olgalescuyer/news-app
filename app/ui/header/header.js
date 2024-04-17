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

const Header = () => {
  return (
    <div className="fixed top-0 left-0 z-30 w-full  bg-light flex flex-col">
      <div className="main-container relative ">
        <header className="z-40 pt-2 md:pt-4 lg:pt-6 ">
          <div className="flex justify-between lg:justify-normal items-end mb-2">
            <Link href="/" className="w-36 pb-2 mr-1">
              <Logo />
            </Link>

            <MenuButton />

            <Navigation intent="desktop" />
          </div>

          <div className="divider h-px w-full bg-grayscale-300"></div>
        </header>{' '}
        <div className="flex justify-between items-center">
          <Filters />
          <SearchButton />
        </div>
        <Search className=" " />
        <MenuMobile />
      </div>
    </div>
  );
};

export default Header;
