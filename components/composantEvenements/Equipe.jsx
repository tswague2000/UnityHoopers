import Image from "next/image";

import styles from './Equipe.module.css';

// creation du composant Equipe qui prends les attribut svts nom, logo, position, victoires, defaites, matchUn, matchDeux, matchTrois, matchQuatre, matchCinq
export default function Equipe({ nom, logo, position, victoires, defaites, matchUn, matchDeux, matchTrois, matchQuatre, matchCinq }) {
  return <>
    <div className={styles.container}>
      <div className={styles.containerLogo}>
        <Image src={logo} alt={{ nom }} className={styles.logoEquipe} />
      </div>
      <h1 className={styles.nom}>{nom}</h1>
      <div className={styles.containerBilan}>
        <ul>
          <li>
            <span>Position</span>
            <span className={styles.nombre}>{position}</span>
          </li>
          <li>
            <span>Victoires</span>
            <span className={styles.nombre}>{victoires}</span>
          </li>
          <li>
            <span>Défaites</span>
            <span className={styles.nombre}>{defaites}</span>
          </li>
        </ul>
      </div>
      <div className={styles.containerDernierMatchs}>
        <div className={styles.dernierMatchs}>
          <div><span>{matchUn}</span></div>
          <div><span>{matchDeux}</span></div>
          <div><span >{matchTrois}</span></div>
          <div><span className={styles.victoire}>{matchQuatre}</span></div>
          <div><span className={styles.victoire}>{matchCinq}</span></div>
        </div>
      </div>
    </div>
  </>
}