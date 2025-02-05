import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg";
import styles from "./Header.module.css";
import hamburger from '@/public/hamburger-button.png'

export default function Header() {
  return (
    <header>
      <div className={styles.navigation}>
        <div className={styles.toggleConatiner}>
          <button>
            <Image className={styles.hamburgerImg} src={hamburger} alt="hamburger-icon" />
          </button>
        </div>
        <div className={styles.logo}>
          <Link href='/' >
            <Image
              className={styles.img}
              src={logo}
              alt="logo-UnityHoopers" />
          </Link>
        </div>
        <nav className={styles.navigationBar}>
          <ul className={`${styles.ul}`}>
            <li ><Link className={styles.link} href='/'>accueil</Link></li>
            <li ><Link className={styles.link} href='calendrier'>évenements</Link></li>
            <li ><Link className={styles.link} href='equipe'>équipe</Link></li>
            <li ><Link className={styles.link} href='partenaires'>partenaires</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}





