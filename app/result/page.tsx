"use client";
import styles from './page.module.css'
import PriorityBar from './components/PriorityBar/PriorityBar'
import TopBar from './components/TopBar/TopBar'
import ResultDisplay from './components/ResultDisplay/ResultDisplay'
import Generate from './components/GenerateBar/Generate';
import HomeButton from './components/HomeButton/HomeButton';
import LogoSwitch from '../components/LogoSwitch/LogoSwitch';
import { useState } from 'react';
import { useSchedulePriority } from '@/app/utils/hooks';

const ResultPage = () => {
  const [schedule, setSchedule] = useState<string[][]>(Array.from({ length: 12 }, () => Array(6).fill("-1")));
  const {schedule: schedulePriority, setters: setSchedulePriority} = useSchedulePriority();
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.homeButton}>
          <HomeButton />
        </div>
        <div className={styles.priorityBar}>
          <PriorityBar schedulePriority={schedulePriority} setSchedulePriority={setSchedulePriority}/>
        </div>
      </div>
      <div className={styles.resultSection}>
        <div className={styles.topBar}>
          <TopBar />
        </div>
        <div className={styles.resultDisplay}>
          <ResultDisplay schedule={schedule} />
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.generateButton}>
          <Generate isVisible={false} setSchedule={setSchedule} schedulePriorityStrings={schedulePriority}/> 
        </div>
        <LogoSwitch />
      </div>
    </div>
  )
}

export default ResultPage