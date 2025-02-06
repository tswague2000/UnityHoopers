import Image from 'next/image';

import styles from './Effectif.module.css';

export default function Effectif({logo, nom, children }) {
    return <>
        <div className={styles.container}>
            <div className={styles.containerNomEquipe}>
                <Image  src={logo} alt="logo-equipe" />
                <div>{nom}</div>
            </div>
            <div className={styles.containerJoueur}>{children}</div>
        </div>
    </>
}