"use client";
import styles from "./page.module.css"
import PriorityBar from "@/app/ui/result/PriorityBar/PriorityBar"
// import TopBar from "@/app/ui/result/TopBar/TopBar"
import ResultDisplay from "@/app/ui/result/ResultDisplay/ResultDisplay"
import Generate from "@/app/ui/result/Generate/Generate";
import { useState } from "react";
import { useSchedulePriorityContext } from "@/app/contexts/SchedulePriorityContext";

const ResultPage = () => {
  const [schedule, setSchedule] = useState<string[][]>(Array.from({ length: 12 }, () => Array(6).fill("-1")));
  const {schedulePriority, setSchedulePriority} = useSchedulePriorityContext();
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.priorityBar}>
          <PriorityBar schedulePriority={schedulePriority} setSchedulePriority={setSchedulePriority}/>
        </div>
      </div>
      <div className={styles.resultSection}>
        <div className={styles.topBar}>
          {/* <TopBar /> */}
          <Generate isVisible={false} setSchedule={setSchedule} schedulePriorityStrings={schedulePriority}/> 
        </div>
        <div className={styles.resultDisplay}>
          <ResultDisplay schedule={schedule} />
        </div>
      </div>
    </div>
  )
}

export default ResultPage