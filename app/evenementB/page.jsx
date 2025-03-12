// Importation des composants nécessaires pour l'affichage des informations de l'événement et des équipes
import Information from "@/components/composantEvenements/Information";
import Equipe from '../../components/composantEvenements/Equipe';
import Effectif from '@/components/composantEffectif/Effectif';
import Joueur from "@/components/composantEffectif/Joueur";

// Importation du fichier CSS pour le style
import styles from './page.module.css';

// Importation des logos des équipes
import unityHoopers from '@/public/logoequipe/UnityHoopers.png';
import agents from '@/public/logoequipe/Agents.png';

/***
 * @type {import('next').Metadata}
 */
export const metadata = {
    title: "Evénements", // Titre affiché dans l'onglet du navigateur
    description: "Découvrez les événements à venir et les activités de notre club de basket-ball." // Description spécifique à la page Événements
};

// Fonction principale du composant EvenementB
export default function EvenementB(){
    return <>
    <div className={styles.container}>
            <div className={styles.information}>
                <Information className={styles.information} date="9 Févr. 2025" lieu="Gymnase Agents" heure="20 : 00" />
            </div>
            <div className={styles.subContainer}>
                <Equipe logo={agents} nom='Agents' position="2er" victoires={1} defaites={1} matchUn="v" matchDeux="D" matchTrois="D" matchQuatre="V" matchCinq="D" />
                <div className={styles.containerOpposition}>
                    <span>vs</span>
                </div>
                <Equipe logo={unityHoopers} nom='Unity Hoopers' position="1e" victoires={2} defaites={0} matchUn="D" matchDeux="V" matchTrois="D" matchQuatre="V" matchCinq="V" />
            </div>
        </div>
        <div className={styles.containerEquipe}>
            <h2>effectif</h2>
            <div className={styles.containerJoueur}>
                <Effectif logo={agents} nom="Agents">
                    <Joueur prenom="lamine" nom="Yamal" numero={0} />
                    <Joueur prenom="souleymae" nom="bah" numero={24} />
                    <Joueur prenom="zacharie" nom="gravel" numero={4} />
                    <Joueur prenom="algassimou" nom="wague" numero={6} />
                    <Joueur prenom="jacque" nom="amouzou" numero={3} />
                </Effectif>
                <Effectif logo={unityHoopers} nom="Unity Hoopers">
                    <Joueur prenom="thierno souleymane" nom="wague" numero={0} />
                    <Joueur prenom="ansoumane" nom="naite" numero={4} />
                    <Joueur prenom="samuel mulamba" nom="ponganendji" numero={45} />
                    <Joueur prenom="boubacar" nom="baldé" numero={8} />
                    <Joueur prenom="moussa" nom="kourouma" numero={1} />
                </Effectif>
            </div>
        </div>
    </>
}