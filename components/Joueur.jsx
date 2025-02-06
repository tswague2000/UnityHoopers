import Image from 'next/image';

import styles from './Joueur.module.css';

// creation du composant Joueur prenant les attributs svts nom, prenom, taille, poste, villeOrigine, image, numero
export default function Joueur({ nom, prenom, taille, poste, villeOrigine, image, numero }) {
  return <>
    <div className={styles.container}>
      <Image className={styles.img} src={image} alt='img-joueur' />
      <div className={styles.carte}>
        <div className={styles.NomPrenom}>
          <span className={styles.prenom}>{prenom} </span>
          <span className={styles.nom}>{nom}</span>
        </div>
        <span className={styles.details}>{taille} | {poste} | {villeOrigine} #{numero}</span>
      </div>
    </div>
  </>
}