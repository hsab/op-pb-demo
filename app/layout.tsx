import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import 'react-spring-bottom-sheet/dist/style.css';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'PB',
  description: 'Participatory Budgeting',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
