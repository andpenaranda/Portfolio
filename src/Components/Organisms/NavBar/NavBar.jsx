import styles from "./NavBar.module.css";

export function NavBar() {
  return (
    <nav className={styles.navbar}>
      <a href="#" className={styles.brandLogo}>
        A N D R E A
      </a>
      <div className={styles.menu}>
        <a href="#">Home</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
