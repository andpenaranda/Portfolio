import { aboutText } from "../../../Constants/AboutInformation.constant";
import styles from "./About.module.css";

export const About = () => {
  return (
    <div>
      <p className={styles.titleAbout}>About.</p>
      <p>{aboutText.about}</p>
    </div>
  );
};
