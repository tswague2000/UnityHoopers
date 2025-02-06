import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

import unityHoopers from '@/public/logoequipe/unityHoopers.png';
import dreamTeam from '@/public/logoequipe/dreamTeam.png';
import calendar from '@/public/calendar.png';
import joueur from '@/public/joueur.jpg';

export default function Evenenment() {
    return <>
        <div className={styles.container}>
            <section className={styles.subContainer}>
                <div className={styles.leftContainer}>
                    <h1>prochain événement</h1>
                    <span>20 : 00  <small>Unity Hoopers Arena</small></span>
                </div>
                <div className={styles.rigthContainer}>
                    <div className={styles.team}>
                        <Image className={styles.img} src={dreamTeam} alt='team-away' />
                        <span>Dream Team</span>
                    </div>
                    <span>VS</span>
                    <div className={styles.team}>
                        <Image className={styles.img} src={unityHoopers} alt='team-home' />
                        <span>Unity Hoopers</span>
                    </div>
                </div>
            </section>
            <Link className={styles.calendarLink} href='../calendrier'>Calendrier des matchs<Image className={styles.iconCalendar} src={calendar} alt='icon-calendar' /></Link>
            <section className={styles.subContainerPOW}>
                <div className={styles.imageWrapper}>
                    <Image className={styles.imgpow} src={joueur} alt='player-of-the-week' />
                    <div className={styles.overlay}>
                        <span className={styles.title}>Athlète de la semaine</span>
                        <span>Samuel Ponganendji #4</span>
                        <div className={styles.stats}>
                            <span>33 Pts</span>
                            <span>8 Reb</span>
                            <span>11 Ast</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
}