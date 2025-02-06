// Importation du composant Image de la librairie "next/image"
import Image from "next/image";

// Importation des styles CSS pour le composant Sponsors
import styles from "./Sponsors.module.css";

// Importation des images des sponsors
import Becker from "@/public/logopartenaires/Becker.jpeg";
import Burger_King from "@/public/logopartenaires/Burger_King.jpg";
import Coca from "@/public/logopartenaires/Coca.jpeg";
import Hibou from "@/public/logopartenaires/Hibou.jpeg";
import Ottawa from "@/public/logopartenaires/Ottawa.jpeg";
import RBC from "@/public/logopartenaires/RBC.jpeg";
import Mamba from "@/public/logopartenaires/Mamba.jpg";
import Cite from "@/public/logopartenaires/Cite.jpg";
import NBA_Image from "@/public/logopartenaires/NBA_Image.jpg";

// Fonction principale du composant Sponsors
export default function Sponsors() {
  return (
    // Conteneur principal pour le composant Sponsors avec les styles appliqués
    <div className={styles.container}>
      <div className={styles.sponsorsList}>
        <Image className={styles.sponsorImage} src={Becker} alt="Becker"/>
        <Image className={styles.sponsorImage} src={Burger_King} alt="Burger_King"/>
        <Image className={styles.sponsorImage} src={Coca} alt="Coca"/>
        <Image className={styles.sponsorImage} src={Ottawa} alt="Ottawa"/>
        <Image className={styles.sponsorImage} src={RBC} alt="RBC"/>
        <Image className={styles.sponsorImage} src={Hibou} alt="Hibou"/>
        <Image className={styles.sponsorImage} src={Cite} alt="Cite"/>
        <Image className={styles.sponsorImage} src={NBA_Image} alt="NBA_Image"/>
        <Image className={styles.sponsorImage} src={Mamba} alt="Mamba"/>
      </div>
    </div>
  );
}
