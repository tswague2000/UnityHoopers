import styles from './page.module.css'

import Image from "next/image";
import image1 from '@/public/logoequipe/logo1.png'
import image2 from '@/public/logoequipe/logo2.png'
import image3 from '@/public/logoequipe/logo2.png'
import image4 from '@/public/logoequipe/logo2.png'
import image5 from '@/public/logoequipe/logo2.png'

export default function Evenenment() {
    return <>
       <div className={styles.firstcontainer}>
       <div className={styles.container}>
            <div className={styles.subcontainer}>
                <div className={styles.dateHeure}>
                    <span>vendredi 12</span>
                    <span>18 : 00</span>
                </div>
                <span className={styles.lieu}>gymnase unity hoopers</span>
                <div className={styles.card}>
                    <div className="card1">
                        <Image src={image1} alt='equipe1' />
                        <span>unity Hoopers</span>
                        <span> 0-0 </span>
                    </div>
                    <span>VS</span>
                    <div className="card2">
                        <Image src={image2} alt='equipe2' />
                        <span>we shoot 3s </span>
                        <span> 1-0 </span>
                    </div>
                </div>
            </div>


        </div>
       </div>
    </>
}