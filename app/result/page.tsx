"use client";
import styles from './page.module.css'
import PriorityBar from './components/PriorityBar/PriorityBar'
import TopBar from './components/TopBar/TopBar'
import ResultDisplay from './components/ResultDisplay/ResultDisplay'

const ResultPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <PriorityBar />
      </div>
      <div className={styles.rightSide}>
        <div className={styles.topBar}>
          <TopBar />
        </div>
        <div className={styles.resultDisplay}>
          <ResultDisplay />
        </div>
      </div>
    </div>
  )
}

export default ResultPage