import styles from './Body.module.css'

export default function Body() {
  return (
    <>
        <section id="Home" className={styles.section}>
          <div className={styles.myInfo}>
            <h1 className={styles.myName}>Rolando Q. Lazo</h1>
            <h2 className={styles.myPos}>Aspiring Web Developer</h2>
            <p className={styles.intro}>As of now I am a fresh College Graduate lorem As of now I am a fresh College Graduate lorem As of now I am a fresh College Graduate lorem As of now I am a fresh College Graduate lorem As of now I am a fresh College Graduate lorem As of now I am a fresh College Graduate lorem As of now I am a fresh College Graduate lorem As of now I am a fresh College Graduate lorem As of now I am a fresh College Graduate lorem As of now I am a fresh College Graduate lorem</p>
            <p className={styles.intro}>As of now I am a fresh College Graduate lorem As of now I am a fresh College Graduate lorem As of now I am a fresh College Graduate lorem As of now I am a fresh College Graduate lorem As of now I am a fresh College Graduate lorem As of now I am a fresh College Graduate lorem</p>
          </div>
          <div className={styles.oval}></div>
        </section>
        <section id="Projects" className={styles.section}>I am Projects</section>
        <section id="About" className={styles.section}>I am About</section>
    </>
  )
}
