"use client";
import React, { useState } from 'react';
import styles from './GenerateBar.module.css';

const GenerateBar = () => {
  const handleClick = () => {
    window.history.back(); 
  };

  return (
    <button className={styles.fileButton} onClick={handleClick}>&gt;
    </button>
  );
};


export default GenerateBar