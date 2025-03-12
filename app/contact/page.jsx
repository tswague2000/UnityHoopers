import ContactForm from '@/components/componentsForm/ContactForm';
import styles from './page.module.css';

/***
 * @type {import('next').Metadata}
 */
export const metadata = {
    title: "Contact", // Titre affiché dans l'onglet du navigateur
    description: "Pour toute question ou demande d'information, n'hésitez pas à nous contacter via ce formulaire." // Description spécifique à la page de contact"
};

export default function Contact(){
    return <>
    <ContactForm/>
    </>
}