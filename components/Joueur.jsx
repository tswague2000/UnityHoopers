import Image from 'next/image';

import styles from './Joueur.module.css';

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