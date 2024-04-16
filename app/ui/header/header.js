import Link from 'next/link';
import Logo from '@/app/ui/logo/logo';
import { Navigation, MenuButton, MobileMenu } from '@/app/ui/ui';

const Header = () => {
  return (
    <div className="fixed top-0 left-0 z-30 w-full main-container">
      {' '}
      <header className=" pt-2 md:pt-4 lg:pt-6 ">
        <div className="flex justify-between lg:justify-normal items-end mb-2">
          <Link href="/" className="w-36 pb-2 mr-1">
            <Logo />
          </Link>

          <MenuButton />

          <Navigation intent="desktop" />
        </div>

        <div className="divider h-px w-full bg-grayscale-300"></div>
      </header>{' '}
      <MobileMenu />
    </div>
  );
};

export default Header;
