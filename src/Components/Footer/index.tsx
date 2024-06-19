import styles from "./footer.module.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footerCard}>
        <div className={styles.socialMedia}>
          <ul className={styles.social_ul}>
            <li className={styles.facebook_li}>
              <a
                href="#"
                className={`${styles.facebookIcon} bi bi-facebook`}
              ></a>
            </li>
            <li className={styles.twitter_li}>
              <a
                href="#"
                className={`${styles.twitterIcon} bi bi-twitter-x`}
              ></a>
            </li>
            <li className={styles.instagram_li}>
              <a
                href="#"
                className={`${styles.instagramIcon} bi bi-instagram`}
              ></a>
            </li>
          </ul>
        </div>
        <div className={styles.copyright}>
          <p>© Copyright Ping. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
