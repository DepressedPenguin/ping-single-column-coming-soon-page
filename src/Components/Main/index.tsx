import EmailInput from "../EmailInput";
import Footer from "../Footer";
import IntroPage from "../IntroPage";
import Modal from "../Modal";
import Slides from "../Slides";
import styles from "./main.module.scss";
export default function Main() {
  return (
    <>
      <div className={styles.mainCard}>
        <IntroPage />
        <EmailInput />
        <Slides />
        <Footer />
      </div>
    </>
  );
}
