"use client";
import React from "react";
import styles from "./Generate.module.css";

interface GenerateProps {
  isVisible: boolean;
}

const Generate: React.FC<GenerateProps> = ({ isVisible }) => {
  return (
    <div className={`${styles.container} ${isVisible ? styles.hide : styles.show}`}>
      <button className={styles.toggleButton}>{"<"}</button>
      <button className={styles.generateButton}>Generate</button>
    </div>
  );
};

export default Generate;
