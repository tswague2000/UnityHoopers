import Image from "next/image";

// importation du style
import styles from "./Footer.module.css";

// importation des images
import facebook from "@/public/facebook.svg";
import instagram from "@/public/instagram.svg";
import tiktok from "@/public/tiktok.svg";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="icon">
      <Image className={styles.childIcon} src={facebook} alt="icon-facebook" />
      <Image className={styles.childIcon} src={tiktok} alt="icon-tiktok" />
      <Image className={styles.childIcon} src={instagram} alt="icon-instagram" />
      </div>
      <span className={styles.copy}> &copy; UnityHoopers. Tous droits réservés.</span>
    </footer>
  );
}
