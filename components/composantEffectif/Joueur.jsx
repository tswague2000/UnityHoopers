import styles from "./joueur.module.css";

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