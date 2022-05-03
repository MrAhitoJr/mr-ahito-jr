import { useRouter } from 'next/router';
import react from 'react';
import styles from './Header.module.css'

export default function Header() {
  const router = useRouter();
  const xpath = router.asPath;
  const path = xpath.substring(2, xpath.length)
  const [navF, setnavF] = react.useState(path);
  if(!path) return "loading...";
  return (
        <ul className={styles.navBar}>
          <li className={styles.navList}>
            <a className={navF === "Home" ? styles.navFocus : styles.navUnFocus} href="#Home" 
            onClick={()=>{setnavF("Home")}}>Home</a>
          </li>
          <li className={styles.navList}>
            <a className={navF === "Projects" ? styles.navFocus : styles.navUnFocus} href="#Projects"
            onClick={()=>{setnavF("Projects")}}>Projects</a>
          </li>
          <li className={styles.navList}>
            <a className={navF === "About" ? styles.navFocus : styles.navUnFocus} href="#About"
            onClick={()=>{setnavF("About")}}>About</a>
          </li>
          <li className={styles.navList}><a style={{color: "var(--fontC)"}} href="Resume">Resume</a></li>
        </ul>
    )
}
