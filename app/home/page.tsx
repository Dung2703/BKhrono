"use client";
import { useState } from "react";
import Head from "next/head"; // Import the Head component for including tags in <head>
import styles from "./page.module.css";
import SideBar from "@/app/ui/home/SideBar/SideBar";
import TextInputBox from "@/app/ui/home/TextInputBox/TextInputBox";

const HomePage = () => {
  const [courses, setCourses] = useState<string[]>([]);
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
        <div className={styles.sidebar}>
          <SideBar courses={courses} />
        </div>
        <div className={styles.inputSection}>
          <TextInputBox setCourses={setCourses} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
