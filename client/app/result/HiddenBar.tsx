"use client";
import React, { useState } from 'react';
import styles from './HiddenBar.module.css';

const HiddenBar = () => {
  return (
    <div className={styles.hiddenBar}>
      <div className={styles.filesContainer}>
        <button className={styles.fileButton}>.pdf file</button>
        <button className={styles.fileButton}>.txt file</button>
        <button className={styles.fileButton}>.xlsx file</button>
      </div>
    </div>
  );
};

export default HiddenBar;