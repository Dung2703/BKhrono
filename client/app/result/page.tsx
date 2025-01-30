import Link from 'next/link'
import React from 'react'


import PriorityBar from './PriorityBar'
import ResultDisplay from './ResultDisplay'
import HiddenBar from './HiddenBar'

import styles from './page.module.css'

const ResultPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <PriorityBar />
      </div>
      <div className={styles.rightSide}>
        <div className={styles.topBar}>
          <HiddenBar />
        </div>
        <div className={styles.resultDisplay}>
          <ResultDisplay />
        </div>
      </div>
      {/* <h1>ResultPage</h1> <br />
      <Link href="./">ClickMeToGoHome</Link> */}
    </div>
  )
}

export default ResultPage