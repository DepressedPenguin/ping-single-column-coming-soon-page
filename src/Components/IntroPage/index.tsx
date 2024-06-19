import styles from "./intropage.module.scss";

export default function IntroPage() {
  return (
    <>
      <div className={styles.Intro_Card}>
        <p className={styles.headlineLine}>
          PING<span className={styles.dote_green}>.</span>
        </p>
        <h1 className={styles.solgnaH1}>
          We are lunching <span className={styles.soonSpan}>soon!</span>
        </h1>
        <p className={styles.para_subscribe}>Subscribe and get notified</p>
      </div>
    </>
  );
}
