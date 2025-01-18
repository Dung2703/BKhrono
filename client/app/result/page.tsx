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
        <HiddenBar />
        <GenerateBar />
        <PriorityBar />
        <ResultDisplay />
    </div>
  )
}

export default ResultPage