import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

import unityHoopers from '@/public/logoequipe/unityHoopers.png';
import dreamTeam from '@/public/logoequipe/dreamTeam.png';


export default function Evenenment() {
    return <>
        <div className={styles.container}>
            <section className={styles.subContainer}>
                <div className={styles.leftContainer}>
                    <h1>prochain événement</h1>
                    <span>20 : 00 </span>
                </div>
                <div className={styles.rigthContainer}>
                    <div className={styles.teamAway}>
                        <Image src={dreamTeam} alt='team-away' />
                    </div>
                    <div className={styles.teamHome}>
                        <Image src={unityHoopers} alt='team-home' />
                    </div>
                </div>
            </section>
            <Link href='../calendrier'>Calendrier des matchs</Link>
            <section className={styles.subContainerPOW}>
                    <div className={styles.back}>
                        <span>athlète de la semaine</span>
                       <div>
                       <span>33 Pts </span>
                       <span>8 Reb </span>
                       <span>11 ast </span>
                       </div>
                    </div>
            </section>

        </div>
    </>
}