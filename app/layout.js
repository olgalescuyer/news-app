import './globals.css';
import { primary } from '@/app/ui/fonts/fonts';

import { AppWrapper } from '@/app/providers/AppWrapper';
import { Header, LatestNews } from '@/app/ui/ui';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={` ${primary.variable} text-primary-dark`}>
      <body suppressHydrationWarning={true}>
        <AppWrapper>
          {' '}
          <div className=" min-h-screen ">
            <Header />
            <main>
              <div className="main-container mt-40 lg:grid lg:grid-cols-12 gap-6">
                {children}
              </div>

              {/* <LatestNews /> */}
            </main>
          </div>
        </AppWrapper>
      </body>
    </html>
  );
}
