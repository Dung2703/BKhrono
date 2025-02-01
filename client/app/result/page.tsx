"use client";
import Link from 'next/link'
import React, { useState } from 'react'


import PriorityBar from './components/PriorityBar/PriorityBar'
import ResultDisplay from './components/ResultDisplay/ResultDisplay'
import HiddenBar from './components/HiddenBar/HiddenBar'
import Generate from "./components/GenerateBar/Generate"
import styles from './page.module.css'

const ResultPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <PriorityBar />
      </div>
      <div className={styles.rightSide}>
        <div className={styles.topBar}>
          <HiddenBar isVisible={isVisible} setIsVisible={setIsVisible} />
        </div>
        <div className={styles.resultDisplay}>
          <ResultDisplay />
        </div>
        <Generate isVisible={isVisible} />
        <button onClick={() => setIsVisible(!isVisible)}>
          Toggle Generate Button
        </button>
      </div>
      {/* <h1>ResultPage</h1> <br />
      <Link href="./">ClickMeToGoHome</Link> */}
    </div>
  )
}

export default ResultPage