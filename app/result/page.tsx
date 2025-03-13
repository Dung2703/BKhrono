"use client";
import styles from './page.module.css'
import PriorityBar from './components/PriorityBar/PriorityBar'
import TopBar from './components/TopBar/TopBar'
import ResultDisplay from './components/ResultDisplay/ResultDisplay'
import Generate from './components/GenerateBar/Generate';
import HomeButton from './components/HomeButton/HomeButton';
import LogoSwitch from '../components/LogoSwitch/LogoSwitch';


const ResultPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
      <HomeButton />
        <PriorityBar />
      </div>
      <div className={styles.resultSection}>
        <div className={styles.topBar}>
          <TopBar />
        </div>
        <div className={styles.resultDisplay}>
          <ResultDisplay />
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.generateButton}>
          <Generate isVisible={false}/> 
        </div>
        <div className={styles.logo_switch}>
          <LogoSwitch />
        </div>
      </div>
    </div>
  )
}

export default ResultPage