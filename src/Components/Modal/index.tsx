import React, { useState } from "react";
import styles from "./modal.module.scss";

export default function Modal({ closeBtn, email }) {
  return (
    <>
      <div className={styles.modal}>
        <div className={styles.overlay}></div>
        <div className={styles.modal_content}>
          <div className={styles.checkMark}>
            <i className={`${styles.iconCheck} bi bi-check-circle`}></i>
          </div>
          <div className={styles.checkMark}>
            <p>Email : {email}</p>
          </div>
          <div className={styles.checkMark_update}>
            <p>You Will get Notify For Any Update</p>
            <p>Thank you 😁</p>
          </div>
          <button onClick={closeBtn} className={styles.btn_close}>
            Close
          </button>
        </div>
      </div>
    </>
  );
}
