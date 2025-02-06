import Image from "next/image";

import ball from '@/public/baskettball.jpg'
import gamepicture from '@/public/gamepicture1.jpg'
import team from '@/public/team.jpg'
import teampicture1 from '@/public/teampicture1.jpg'

import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.title}>
          <h1>Bienvenue sur UnityHoopers !</h1>
          <p>
            Notre objectif est de rassembler joueurs, supporters et partenaires
            autour d’une passion commune pour le basketball. Sur ce site, vous
            trouverez toutes les informations essentielles : les dates et lieux
            de nos matchs à domicile et à l’extérieur, une présentation des
            joueurs qui composent notre équipe, ainsi qu’une section dédiée à
            nos précieux sponsors. Que vous soyez un fervent supporter ou
            simplement curieux de découvrir notre univers, UnityHoopers est
            l’endroit idéal pour suivre nos aventures et soutenir l’équipe dans
            toutes ses performances. Rejoignez-nous pour vibrer ensemble au
            rythme de chaque panier !
          </p>
        </section>
        <section className={styles.images}>
          <div className={`${styles.slidercontainer, styles.slider1}`}>
            <div className={styles.slider}>
              <Image className={styles.image} src={ball} alt="ima" />
              <Image className={styles.image} src={team} alt="ima" />
              <Image className={styles.image} src={teampicture1} alt="ima" />
              <Image className={styles.image} src={gamepicture} alt="ima" />
              <Image className={styles.image} src={ball} alt="ima" />
            </div>
          </div>
        </section>
        <section className={styles.classement}>
          <h2 className={styles.titre}>classement</h2>
          <table className={styles.teamranking} border={1}>
            <thead>
              <tr>
                <th>Pos</th>
                <th>Nom</th>
                <th>Bilan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>UnityHoopers</td>
                <td>10-2</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Basket Stars</td>
                <td>9-3</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Hoop Legends</td>
                <td>9-3</td>
              </tr>
              <tr>
                <td>4</td>
                <td>we shoots 3s</td>
                <td>8-4</td>
              </tr>
              <tr>
                <td>5</td>
                <td>mamba</td>
                <td>7-5</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
}
