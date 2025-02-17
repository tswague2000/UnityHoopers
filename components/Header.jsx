'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react"; // Import useState

import styles from "./Header.module.css";

import hamburger from '@/public/hamburger-button.png';
import logo from "@/public/logo.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour gérer l'ouverture/fermeture du menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Bascule l'état du menu
  };
  return (
    <header>
      <div className={styles.navigation}>
        <div className={styles.toggleConatiner}>
          <button onClick={toggleMenu}>
            <Image className={styles.hamburgerImg} src={hamburger} alt="hamburger-icon" />
          </button>
        </div>
        <div className={styles.logo}>
          <Link href='/'>
            <Image
              className={styles.img}
              src={logo}
              alt="logo-UnityHoopers"
            />
          </Link>
        </div>
        <nav className={`${styles.navigationBar} ${isMenuOpen ? styles.open : ''}`}>
          <ul className={styles.ul}>
            <li><Link className={styles.link} href='/'>accueil</Link></li>
            <li><Link className={styles.link} href='calendrier'>évenements</Link></li>
            <li><Link className={styles.link} href='equipe'>équipe</Link></li>
            <li><Link className={styles.link} href='partenaires'>partenaires</Link></li>
            <li><Link className={styles.link} href='contact'>contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}