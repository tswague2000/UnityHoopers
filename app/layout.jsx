import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './layout.module.css';

import { Poppins, Roboto } from 'next/font/google';

import './globals.css';
const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-Poppins'
});
const roboto = Roboto({
  weight: ['400'],
  style: 'normal',
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-roboto'
});

export const metadata = {
  title: "Unity Hoopers",
  description: "creation de site web vitrine d'un club de baskett-ball",
};
export default function RootLayout({ children }) {
  return <html lang="en" className={ roboto.variable+' '+poppins.variable}>
    <body className={styles.body}>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </body>
  </html>
}
