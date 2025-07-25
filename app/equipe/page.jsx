// Importation du composant Joueur pour l'affichage des joueurs
import Joueur from "@/components/Joueur";

// Importation des styles CSS pour la page
import styles from './page.module.css';

// Importation des images des joueurs
import wague from '@/public/joueurs/wague.jpg';
import balde from '@/public/joueurs/balde.png';
import naite from '@/public/joueurs/naite.png';
import moussa from '@/public/joueurs/moussa.png';
import sam from '@/public/joueurs/sam.png';

/***
 * @type {import('next').Metadata}
 */
export const metadata = {
     title: "Equipe", // Titre affiché dans l'onglet du navigateur
     description: "Découvrez les membres de notre club de basket-ball et leur postes." // Description spécifique à la page Équipe
};

// Définition du composant principal de la page "équipe"
export default function equipe() {
     return <>
          <section className={styles.container}>
               <Joueur image={wague} nom='wague' prenom='thierno souleymane' taille='6.4' poste='forward' villeOrigine='Guinea' numero={0} />
               <Joueur image={balde} nom='baldé' prenom='boubacar' taille='6.4' poste='forward' villeOrigine='Guinea' numero={6} />
               <Joueur image={naite} nom='naite' prenom='ansoumane' taille='6.4' poste='forward' villeOrigine='RDC' numero={24} />
               <Joueur image={sam} nom='ponganendji' prenom='samuel moulamba' taille='5.9' poste='guard' villeOrigine='Guinea' numero={4} />
               <Joueur image={moussa} nom = 'kourouma' prenom='moussa' taille='5.8' poste='guard' villeOrigine='Guinea' numero = {3} />
          </section>
     </>
}