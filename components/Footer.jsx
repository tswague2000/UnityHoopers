import styles from "./Footer.module.css";
import Image from "next/image";
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
      <span className={styles.copy}> &copy; tswague &amp; samNendji</span>
    </footer>
  );
}
