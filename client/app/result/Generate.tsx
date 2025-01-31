"use client";
import React from "react";
import styles from "./Generate.module.css";

interface GenerateProps {
  isVisible: boolean;
}

const Generate: React.FC<GenerateProps> = ({ isVisible }) => {
  return (
    <button className={`${styles.generateButton} ${isVisible ? styles.hide : styles.show}`}>
      Generate
    </button>
  );
};

export default Generate;
