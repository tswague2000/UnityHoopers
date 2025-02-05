import Information from "@/components/composantEvenements/Information";
import Equipe from '../../components/composantEvenements/Equipe';
import Effectif from '@/components/composantEffectif/Effectif';
import Joueur from "@/components/composantEffectif/Joueur";

import styles from './page.module.css';

import unityHoopers from '@/public/logoequipe/UnityHoopers.png';
import DreamTeam from '@/public/logoequipe/dreamTeam.png';

export default function EvenementA() {
    return <>
        <div className={styles.container}>
            <div className={styles.information}>
                <Information className={styles.information} date="2 Févr. 2025" lieu="Gymnase UnityHoopers" heure="19 : 00" />
            </div>
            <div className={styles.subContainer}>
                <Equipe logo={unityHoopers} nom='Unity Hoopers' position="1er" victoires={2} defaites={0} matchUn="D" matchDeux="D" matchTrois="V" matchQuatre="V" matchCinq="V" />
                <div className={styles.containerOpposition}>
                    <span>vs</span>
                </div>
                <Equipe logo={DreamTeam} nom='Dream Team' position="9e" victoires={0} defaites={2} matchUn="D" matchDeux="V" matchTrois="D" matchQuatre="V" matchCinq="D" />
            </div>
        </div>
        <div className={styles.containerEquipe}>
            <h2>effectif</h2>
            <div className={styles.containerJoueur}>
                <Effectif logo={unityHoopers} nom="Unity Hoopers">
                    <Joueur prenom="thierno souleymane" nom="wague" numero={0} />
                    <Joueur prenom="ansoumane" nom="naite" numero={24} />
                    <Joueur prenom="samuel mulamba" nom="ponganendji" numero={4} />
                    <Joueur prenom="boubacar" nom="baldé" numero={6} />
                    <Joueur prenom="moussa" nom="kourouma" numero={3} />
                </Effectif>
                <Effectif logo={DreamTeam} nom="Dream Team">
                    <Joueur prenom="xavier" nom="gravel" numero={0} />
                    <Joueur prenom="michael" nom="james" numero={4} />
                    <Joueur prenom="sam" nom="bourgeis" numero={45} />
                    <Joueur prenom="ali" nom="mounir" numero={8} />
                    <Joueur prenom="james" nom="white" numero={1} />
                </Effectif>
            </div>
        </div>
    </>
}