import Image from "next/image";
import logo from "@/public/logo.svg";
import styles from "./Header.module.css";
import hamburger from '@/public/hamburger-button.png'

export default function Header() {
  return (
    <header>

      <div className= { styles.navigation}>
        <div className={styles.toggleConatiner}>
          <button>
            <Image className={styles.hamburgerImg} src={hamburger} alt="hamburger-icon"/>
          </button>
        </div>
        <div className={styles.logo}>
          <Image
            className={styles.img}
            src={logo}
            alt="logo-UnityHoopers"
          />
        </div>
        <nav className={styles.navigationBar}>
          <ul className={`${styles.ul}`}>
            <li >accueil</li>
            <li >évenements</li>
            <li >équipe</li>
            <li >partenaires</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}


