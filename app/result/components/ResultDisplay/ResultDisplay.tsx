import React from "react";
import styles from "./ResultDisplay.module.css";
import { getSchedule } from "@/app/utils/actions";

const ResultDisplay = () => {
  const schedule: number[][]= getSchedule();
  // console.log(schedule);

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={`${styles.day} ${styles.corner}`}>Time</th>
            <th className={styles.day}>Mo</th>
            <th className={styles.day}>Tu</th>
            <th className={styles.day}>We</th>
            <th className={styles.day}>Th</th>
            <th className={styles.day}>Fr</th>
            <th className={styles.day}>Sa</th>
          </tr>
        </thead>
        <tbody>
          {
            schedule.map((cell, index) => (
              <tr key={index}>
                <th className={styles.time}>{index + 7}-{index + 8}</th>
                {
                  cell.map((classIndex, colIndex) => (
                    <td key={colIndex} className={styles.cell}>
                      {/* {classIndex !== -1 ? `${Classes[classIndex].course_id}` : ""} */}
                    </td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default ResultDisplay;