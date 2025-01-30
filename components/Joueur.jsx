import styles from './Joueur.module.css';

export default function Joueur({ nom, prenom, taille, poste, villeOrigine, children }){
    return <>  
    <div className={styles.container}>
      <div>
        {children}
      </div>
      <div className={styles.carte}>
        <span className={styles.nom}>{prenom} {nom}</span>
       <span className={styles.details}>{taille} | {poste} | {villeOrigine}</span>
      </div>
    </div>        
    </>
}