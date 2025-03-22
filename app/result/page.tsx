"use client";
import styles from './page.module.css'
import PriorityBar from './components/PriorityBar/PriorityBar'
import TopBar from './components/TopBar/TopBar'
import ResultDisplay from './components/ResultDisplay/ResultDisplay'
import Generate from './components/GenerateBar/Generate';
import HomeButton from './components/HomeButton/HomeButton';
import LogoSwitch from '../components/LogoSwitch/LogoSwitch';
import { useState } from 'react';

const ResultPage = () => {
  const [schedule, setSchedule] = useState<string[][]>(Array.from({ length: 12 }, () => Array(6).fill("-1")));
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.homeButton}>
          <HomeButton />
        </div>
        <div className={styles.priorityBar}>
          <PriorityBar />
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
          <Generate isVisible={false} setSchedule={setSchedule}/> 
        </div>
        <LogoSwitch />
      </div>
    </div>
  )
}

export default ResultPage