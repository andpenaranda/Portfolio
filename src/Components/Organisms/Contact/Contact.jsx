import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <div>
      <p className={styles.titleContact}>Contact.</p>
      <p className={styles.paragraphContact}>
        Let's keep in touch, I'm not <br /> currently looking for any new <br />
        opportunities but don't think twice <br /> my inbox is allways open.
      </p>
      <button className={styles.button} type="button">Say hi!</button>
    </div>
  );
};
