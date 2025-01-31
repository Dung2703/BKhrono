"use client";
import React, { useState } from "react";
import styles from "./HiddenBar.module.css";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const HiddenBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [parent] = useAutoAnimate();

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {/* Khung chứa file nằm giữa trên cùng */}
      <div ref={parent} className={`${styles.filesContainer} ${isVisible ? styles.show : styles.hide}`}>
        <button className={styles.fileButton}>.pdf file</button>
        <button className={styles.fileButton}>.txt file</button>
        <button className={styles.fileButton}>.xlsx file</button>
      </div>

      {/* Nút mở menu ở góc phải trên cùng */}
      <div className={styles.hiddenBar}>
        <button className={styles.toggleButton} onClick={handleClick}>
          {isVisible ? "<" : ">"}
        </button>
      </div>
    </>
  );
};

export default HiddenBar;
