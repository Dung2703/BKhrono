import Link from 'next/link'
import React from 'react'

import GenerateBar from './GenerateBar'
import PriorityBar from './PriorityBar'
import ResultDisplay from './ResultDisplay'
import HiddenBar from './HiddenBar'

import styles from './page.module.css'

const ResultPage = () => {
  return (
    <div className={styles.container}>
        <h1>ResultPage</h1> <br />
        <Link href="./">ClickMeToGoHome</Link>
        <div className={styles.topBar}>
          <div className={styles.hiddenBar}>
            <HiddenBar />
          </div>
          <div className={styles.generateBar}>
            <GenerateBar />
          </div>
        </div>
        <div className={styles.priorityAndDisplay}>
          <div className={styles.priorityBar}>
            <PriorityBar />
          </div>
          <div className={styles.resultDisplay}>
            <ResultDisplay />
          </div>
        </div>
    </div>
  )
}

export default ResultPage