// Importation du composant Sponsors depuis le répertoire components
import Sponsors from '../../components/Sponsors';

/***
 * @type {import('next').Metadata}
 */
export const metadata = {
  title: "Partenaires", // Titre affiché dans l'onglet du navigateur
  description: "Découvrez les événements à venir et les activités de notre club de basket-ball." // Description spécifique à la page Événements
};

export default function Page() {
  return (
    // Conteneur principal de la page
    <div>
      {/* Inclusion du composant Sponsors */}
      <Sponsors />
    </div>
  );
}