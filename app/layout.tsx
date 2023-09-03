import { Footer, Navbar } from '@/components';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './GlobalRedux/provider';
import ReactQueryProvider from './ReactQueryProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Online Store',
  description: 'An online store for everything',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="en">
      <body className='relative'>
        <Navbar />
        <Providers>
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
