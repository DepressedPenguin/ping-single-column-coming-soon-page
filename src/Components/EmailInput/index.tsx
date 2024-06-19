import { useState } from "react";
import styles from "./emailinput.module.scss";
import Modal from "../Modal";

export default function EmailInput() {
  // GET VALUE OF INPUT
  const [email, setEmail] = useState("");
  const [toggle, setToggle] = useState(false);

  const toggleModal = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className={styles.cardInput}>
        <input
          className={styles.inputStyle}
          type="text"
          name="email"
          id="email"
          placeholder="Your email address..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={toggleModal} className={styles.btn_notify}>
          Notify Me
        </button>
      </div>
      {toggle && <Modal email={email} closeBtn={toggleModal} />}
    </>
  );
}
