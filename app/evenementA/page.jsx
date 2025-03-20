// Importation des composants nécessaires pour la page des événements
import Information from "@/components/composantEvenements/Information"; // Composant affichant les détails de l'événement
import Equipe from "../../components/composantEvenements/Equipe"; // Composant représentant une équipe
import Effectif from "@/components/composantEffectif/Effectif"; // Composant affichant la liste des joueurs d'une équipe
import Joueur from "@/components/composantEffectif/Joueur"; // Composant représentant un joueur individuel

// Importation des styles spécifiques à la page
import styles from './page.module.css';

// Importation des logos des équipes
import unityHoopers from '@/public/logoequipe/UnityHoopers.png';
import DreamTeam from '@/public/logoequipe/dreamTeam.png';

/***
 * @type {import('next').Metadata}
 */
export const metadata = {
    title: "Unity Hoopers vs Dream Team", // Titre affiché dans l'onglet du navigateur
    description: "Ne manquez pas l’affrontement tant attendu entre UnityHoopers et Dream Team ! Rendez-vous à domicile pour soutenir votre équipe locale et vivre un match intense rempli d’action et de passion. Achetez vos billets et rejoignez l’ambiance électrique du basketball ! " 
};

// Définition du composant principal de la page EvenementA
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