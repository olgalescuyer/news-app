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
        <div className="flex justify-between lg:justify-normal items-end mb-2">
          <Link href="/" className="w-36 pb-2 mr-1">
            <span className="sr-only">Aller à la page d'accueil</span>
            <Logo variant="fill-primary-dark" />
          </Link>

          <MenuButton />

          <Navigation intent="desktop" />
        </div>

        <div className="divider h-px w-full bg-grayscale-300"></div>
      </header>{' '}
      {/* <div className="relative">
          <div className="flex justify-between items-center">
            <div className="overflow-x-auto pb-3 flex items-center space-x-3 mt-3 mb-1 relative">
              <SearchButton className=" lg:hidden flex chips" label="search" />
              <Filters />
            </div>

            <SearchButton className=" hidden lg:block" />
          </div>
        </div> */}
      {/* <Search className="hidden lg:block " intent="desktop" /> */}
      {/* <Search className=" lg:hidden" intent="mobile" /> */}
      <MenuMobile />
    </div>
  );
};

export default Header;
