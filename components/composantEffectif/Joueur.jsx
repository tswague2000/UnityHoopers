import styles from "./joueur.module.css";

// creation du composant Joueur prennant les attributs svts prenom, nom, numero
export default function Joueur({ prenom, nom, numero }) {
    return <>
        <div className={styles.container}>
            <div className={styles.Joueur}>
                <span>{prenom}</span>
                <div className={styles.containerNom}>
                    <span>{nom}</span>
                    <span>#{numero}</span>
                </div>
            </div>
        </div>
    </>
}