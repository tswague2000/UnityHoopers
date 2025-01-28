import styles from './page.module.css'

import Image from "next/image";
import agents from '@/public/logoequipe/Agents.png';
import believe from '@/public/logoequipe/believeThat.png';
import dream from '@/public/logoequipe/dreamTeam.png';
import swish from '@/public/logoequipe/swish.png';
import thedons from '@/public/logoequipe/thedons.png';
import thedirty from '@/public/logoequipe/Thedirty.png';
import UnityHoopers from '@/public/logoequipe/UnityHoopers.png';
import weShoot3s from '@/public/logoequipe/weShoot3s.png';

export default function Evenenment() {
    return <>
       <div className={styles.firstcontainer}>
       <div className={styles.container}>
            <div className={styles.subcontainer}>
                <div className={styles.dateHeure}>
                    <span>Dimanche 2</span>
                    <span>18 : 00</span>
                </div>
                <span className={styles.lieu}>Unity Hoopers Arena</span>
                <div className={styles.card}>
                    <div className= {styles.card1}>
                        <Image className={styles.img} src={UnityHoopers} alt='equipe1' />
                        <span>unity Hoopers</span>
                        <span> 2-0 </span>
                    </div>
                    <span>VS</span>
                    <div className={styles.card2}>
                        <Image className={styles.img} src={dream} alt='equipe2' />
                        <span>Dream Team </span>
                        <span> 1-1 </span>
                    </div>
                </div>
            </div>
        </div>
       </div>
       <div className={styles.firstcontainer}>
       <div className={styles.container}>
            <div className={styles.subcontainer}>
                <div className={styles.dateHeure}>
                    <span>Dimanche 12</span>
                    <span>20 : 00</span>
                </div>
                <span className={styles.lieu}>gymnase Agents</span>
                <div className={styles.card}>
                    <div className= {styles.card1}>
                        <Image className={styles.img} src={agents} alt='equipe1' />
                        <span>Agents</span>
                        <span> 0-2 </span>
                    </div>
                    <span>VS</span>
                    <div className={styles.card2}>
                        <Image className={styles.img} src={UnityHoopers} alt='equipe2' />
                        <span>Unity Hoopers</span>
                        <span> 2-0 </span>
                    </div>
                </div>
            </div>
        </div>
       </div>
       <div className={styles.firstcontainer}>
       <div className={styles.container}>
            <div className={styles.subcontainer}>
                <div className={styles.dateHeure}>
                    <span>vDimanche 12</span>
                    <span>19 : 00</span>
                </div>
                <span className={styles.lieu}></span>
                <div className={styles.card}>
                    <div className= {styles.card1}>
                        <Image className={styles.img} src={believe} alt='equipe1' />
                        <span>Believe That</span>
                        <span> 2-0 </span>
                    </div>
                    <span>VS</span>
                    <div className={styles.card2}>
                        <Image className={styles.img} src={UnityHoopers} alt='equipe2' />
                        <span>Unity Hoopers</span>
                        <span> 2-0 </span>
                    </div>
                </div>
            </div>
        </div>
       </div>
       <div className={styles.firstcontainer}>
       <div className={styles.container}>
            <div className={styles.subcontainer}>
                <div className={styles.dateHeure}>
                    <span>vendredi 12</span>
                    <span>18 : 00</span>
                </div>
                <span className={styles.lieu}> unity hoopers Arena</span>
                <div className={styles.card}>
                    <div className= {styles.card1}>
                        <Image className={styles.img} src={UnityHoopers} alt='equipe1' />
                        <span>unity Hoopers</span>
                        <span> 2-0 </span>
                    </div>
                    <span>VS</span>
                    <div className={styles.card2}>
                        <Image className={styles.img} src={swish} alt='equipe2' />
                        <span>swish chalet</span>
                        <span> 1-1 </span>
                    </div>
                </div>
            </div>
        </div>
       </div>
       <div className={styles.firstcontainer}>
       <div className={styles.container}>
            <div className={styles.subcontainer}>
                <div className={styles.dateHeure}>
                    <span>vendredi 12</span>
                    <span>18 : 00</span>
                </div>
                <span className={styles.lieu}>uottawa</span>
                <div className={styles.card}>
                    <div className= {styles.card1}>
                        <Image className={styles.img} src={weShoot3s} alt='equipe1' />
                        <span>We shoot 3s</span>
                        <span> 0-2 </span>
                    </div>
                    <span>VS</span>
                    <div className={styles.card2}>
                        <Image className={styles.img} src={UnityHoopers} alt='equipe2' />
                        <span>Unity Hoopers </span>
                        <span> 2-0 </span>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </>
}