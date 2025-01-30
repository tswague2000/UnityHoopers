import Joueur from "@/components/Joueur";
import Image from "next/image";
import styles from './page.module.css';

import joueur from "../../public/joueur.jpg";

export default function equipe() {
    return <>
        <section className={styles.container}>
           <Joueur nom = 'wague' prenom='thierno souleymane' taille='6.4' poste='forward' villeOrigine='Guinea' >
                <Image className={styles.img} src={joueur} alt="image-du joueur"/>
           </Joueur>
        </section>
    </>
}