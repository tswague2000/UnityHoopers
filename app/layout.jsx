// Importation des composants principaux du layout
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Importation des styles CSS spécifiques au layout
import styles from './layout.module.css';

// Importation des polices Google Fonts depuis Next.js
import { Poppins, Roboto } from 'next/font/google';

// Importation des styles globaux de l'application
import './globals.css';

// Configuration de la police Poppins avec différents styles et poids
const poppins = Poppins({
  weight: ['400', '700'], // Poids des polices disponibles
  style: ['normal', 'italic'], // Styles disponibles (normal et italique)
  display: 'swap', // Optimisation du rendu de la police
  subsets: ['latin'], // Subset utilisé pour le support des caractères latins
  variable: '--font-Poppins' // Nom de la variable CSS associée à cette police
});

// Configuration de la police Roboto
const roboto = Roboto({
  weight: ['400'], // Poids unique défini pour la police
  style: 'normal', // Style normal uniquement
  display: 'swap', // Optimisation du rendu
  subsets: ['latin'], // Support des caractères latins
  variable: '--font-roboto' // Variable CSS associée
});

// Définition des métadonnées du site (utilisées pour le SEO)
export const metadata = {
  title: "Unity Hoopers", // Titre affiché dans l'onglet du navigateur
  description: "Création de site web vitrine d'un club de basket-ball" // Courte description du site
};

// Définition du composant RootLayout, qui structure la mise en page principale de l'application
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.variable + ' ' + poppins.variable}>
      <body className={styles.body}>
        <Header /> {/* Inclusion de l'en-tête du site */}
        <main className={styles.main}>
          {children} {/* Contenu de la page (sera remplacé dynamiquement) */}
        </main>
        <Footer /> {/* Inclusion du pied de page */}
      </body>
    </html>
  );
}
