"use client";
import React, { useState } from 'react';
import styles from './HiddenBar.module.css';
import { useAutoAnimate } from '@formkit/auto-animate/react';

const HiddenBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [parent] = useAutoAnimate();

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={`${styles.hiddenBar} ${isVisible ? styles.show : ''}`}>
      <button className={styles.toggleButton} onClick={handleClick}>
        {isVisible ? 'X' : 'File type'}
      </button>
      <div ref={parent} className={`${styles.filesContainer} ${isVisible ? styles.show : styles.hide}`}>
        <button className={styles.fileButton}>.pdf file</button>
        <button className={styles.fileButton}>.txt file</button>
        <button className={styles.fileButton}>.xlsx file</button>
      </div>
    </div>
  );
};

export default HiddenBar;