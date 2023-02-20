import selfDraw from "../../../Assets/me.svg";
import styles from "./Welcome.module.css";

export const Welcome = () => {
  return (
    <div>
      <p className={styles.paragraphIntro}>Hi, my name is</p>
      <p className={styles.paragraphAndrea}>ANDREA</p>
      <p className={styles.paragraphPenaranda}>PEÑARANDA</p>
      <img className={styles.imageStyle} src={selfDraw} alt="ANDREA-SVG" />
    </div>
  );
};
