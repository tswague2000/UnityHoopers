import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './layout.module.css';

import './globals.css';

export const metadata = {
  title: "Unity Hoopers",
  description: "creation de site web vitrine d'un club de baskett-ball",
};

export default function RootLayout({ children }) {
  return  <html lang="en">
  <body className={styles.body}>
      <Header />

      <main className={styles.main}>
          {children}

          
      </main>
      
      <Footer />
  </body>
</html>
}
