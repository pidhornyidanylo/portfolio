import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ThemeContextProvider } from '@/store/ThemeContext';
import Header from '@/components/Header/Header';
import SideBar from '@/components/SideBar/SideBar';
import Favicon from './favicon.ico';
import './globals.scss';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: 'normal',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Portfolio',
    template: '%s | portfolio',
  },
  icons: [{ rel: 'icon', url: Favicon.src }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeContextProvider>
      <html lang='en'>
        <body className={poppins.className}>
          <Header />
          <main>
            <SideBar />
            <div className='content-container'>{children}</div>
          </main>
        </body>
      </html>
    </ThemeContextProvider>
  );
}
