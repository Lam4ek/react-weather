import React from "react";
import { MdError } from "react-icons/md";
import { CgClose } from "react-icons/cg";
import styles from "./InputError.module.css";

function InputError({ setIsFoundError, isFoundError }) {
  return (
    <div className={styles.errorBlock}>
      <MdError className={styles.errorIcon} />
      <span>City not found</span>
      <CgClose
        onClick={() => setIsFoundError(!isFoundError)}
        className={styles.closeIcon}
      />
    </div>
  );
}

export default InputError;
