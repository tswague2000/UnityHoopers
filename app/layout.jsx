import { Poppins, Roboto } from 'next/font/google';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import './globals.css';
import styles from './layout.module.css';

const poppins = Poppins({
  weight: ['400', '700'], 
  style: ['normal', 'italic'], 
  display: 'swap', 
  subsets: ['latin'], 
  variable: '--font-Poppins' 
});

// Configuration de la police Roboto
const roboto = Roboto({
  weight: ['400'], 
  style: 'normal', 
  display: 'swap', 
  subsets: ['latin'], 
  variable: '--font-roboto' 
});

// Définition des métadonnées du site (utilisées pour le SEO)
export const metadata = {
  title: "Unity Hoopers", 
  description: "Site web affichant les évenements de l'equipe de basket-ball Unity Hoopers" 
};

// Définition du composant RootLayout, qui structure la mise en page principale de l'application
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.variable + ' ' + poppins.variable}>
      <body className={styles.body}>
        <Header />
        <main className={styles.main}>
          {children} 
        </main>
        <Footer /> 
      </body>
    </html>
  );
}
