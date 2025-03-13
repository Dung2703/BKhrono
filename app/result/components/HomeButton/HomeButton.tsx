import React from "react";
import styles from "./HomeButton.module.css";

const HomeButton = () => {
  return (
    <button className={styles.homeButton} onClick={() => window.location.href = '/'}>
      Home
    </button>
  );
}

export default HomeButton;