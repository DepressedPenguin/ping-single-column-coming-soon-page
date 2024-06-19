import React from "react";
import styles from "./modal.module.scss";

interface ModalProps {
  closeBtn: () => void;
  email: string;
}

const Modal: React.FC<ModalProps> = ({ closeBtn, email }) => {
  return (
    <>
      <div className={styles.modal}>
        <div className={styles.overlay}></div>
        <div className={styles.modal_content}>
          <div className={styles.checkMark}>
            <i className={`${styles.iconCheck} bi bi-check-circle`}></i>
          </div>
          <div className={styles.checkMark}>
            <p>Email: {email}</p>
          </div>
          <div className={styles.checkMark_update}>
            <p>You will get notified of any updates</p>
            <p>Thank you 😁</p>
          </div>
          <button onClick={closeBtn} className={styles.btn_close}>
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
