import React from "react";
import styles from "./Generate.module.css";
import { getSchedule } from "@/app/utils/actions";

interface GenerateProps {
  isVisible: boolean;
  setSchedule: React.Dispatch<React.SetStateAction<string[][]>>;
}

const Generate: React.FC<GenerateProps> = ({ isVisible, setSchedule }) => {
  const generateSchedule = () => {
    setSchedule([...getSchedule()]);
  };
  return (
    <div className={`${styles.container} ${isVisible ? styles.hide : styles.show}`}>
      <button className={styles.generateButton} onClick={() => generateSchedule()}>Generate</button>
    </div>
  );
};

export default Generate;
