"use client";
import styles from "./page.module.css"
import PriorityBar from "@/app/ui/result/PriorityBar/PriorityBar"
import TopBar from "@/app/ui/result/TopBar/TopBar"
import ResultDisplay from "@/app/ui/result/ResultDisplay/ResultDisplay"
import Generate from "@/app/ui/result/GenerateBar/Generate";
import { useState } from "react";
import { useSchedulePriority } from "@/app/utils/hooks";
import Head from "next/head"; // Import the Head component for including tags in <head>

const ResultPage = () => {
  const [schedule, setSchedule] = useState<string[][]>(Array.from({ length: 12 }, () => Array(6).fill("-1")));
  const {schedule: schedulePriority, setters: setSchedulePriority} = useSchedulePriority();
  return (
    <>
      <Head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-E7R69QRCN3"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-E7R69QRCN3');
            `,
          }}
        />
      </Head>
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
    </>
  )
}

export default ResultPage