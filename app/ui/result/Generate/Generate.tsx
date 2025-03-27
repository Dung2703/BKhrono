import React from "react";
import styles from "./Generate.module.css";
import { getSchedule, getSchedulePriority } from "@/app/utils/actions";
import { SchedulePriority, SchedulePriorityStrings } from "@/app/utils/types";


interface GenerateProps {
  isVisible: boolean;
  setSchedule: React.Dispatch<React.SetStateAction<string[][]>>;
  schedulePriorityStrings: SchedulePriorityStrings;
}

const Generate: React.FC<GenerateProps> = ({ isVisible, setSchedule, schedulePriorityStrings }) => {
  const generateSchedule = () => {
    const schedulePriority: SchedulePriority = getSchedulePriority(schedulePriorityStrings);
    setSchedule([...getSchedule(schedulePriority)]);
  };
  return (
    <div className={`${styles.container} ${isVisible ? styles.hide : styles.show}`}>
      <button className={styles.generateButton} onClick={() => generateSchedule()}>Generate</button>
    </div>
  );
};

export default Generate;
