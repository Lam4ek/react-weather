import React from "react";
import styles from "./Sidebar.module.css";

function Showinfo({ showInfo, setShowInfo }) {
  return (
    <div className={styles.showInfoContainer}>
      <div style={{}}></div>
      <img
        className={styles.showInfo}
        onClick={() => setShowInfo(!showInfo)}
        src="img/info-icon.png"
        alt=""
      />
    </div>
  );
}

export default Showinfo;
