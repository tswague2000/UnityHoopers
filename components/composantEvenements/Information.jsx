import styles from './Information.module.css';

// creation du composant titre qui prend les attrubut suivants date, lieu,heure
export default function Information({date = '1 Févr.2025', lieu = 'Gymane Unity Hoopers', heure = '18 : 00'}) {
    return <>
        <div className={styles.container}>
            <ul>
                <li>{date}</li>
                <li>{lieu}</li>
                <li>{heure}</li>
            </ul>
        </div></>
}